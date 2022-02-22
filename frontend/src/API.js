import axios from 'axios';
export const LOGIN_USER_KEY = 'LOGIN_USER_KEY';

var baseURL;
if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
    baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
    baseURL = 'http://127.0.0.1:8000';
}

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(
    config => {
        if (config.requireToken) {
            const user = localStorage.getItem(LOGIN_USER_KEY) ? JSON.parse(localStorage.getItem(LOGIN_USER_KEY)) : null;
            config.headers.common['Authorization'] = user.token;
        }

        return config;
    },
    err => console.error(err)
);

api.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        console.log('error.response', error);
        if (error.response.status === 401) {
            localStorage.removeItem(LOGIN_USER_KEY);
        }

        return Promise.reject(error);
    }
);

export default class API {
    signUp = async signUpBody => {
        const formData = new FormData();

        for (const key in signUpBody) {
            formData.append(key, signUpBody[key]);
        }

        return api.post('/users/signup/', formData);
    };

    signIn = async signInBody => {
        const formData = new FormData();
        for (const key in signInBody) {
            formData.append(key, signInBody[key]);
        }
        return api.post('/users/signin/', formData);
    };

    getPatents = (query = {}) => {
        return api.get(
            'https://api.nasa.gov/techtransfer/patent/?engine&api_key=VN6vYYdFF8xFWzpLWrkziYlITvRz2CHhd7weRl0O/',
            { params: query, requireToken: true }
        );
    };
    getFavorites = async () => {
        const favorites = await api
            .get('/favorites/', { requireToken: true })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return favorites;
    };

    addFavorites = async addFavoriteBody => {
        const savedPost = await api
            .post('/favorites/add/', addFavoriteBody, { requireToken: true })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedPost;
    };

    deleteFavorites = id => {
        return api.delete(`favorites/delete/${id}`, { requireToken: true });
    };
}
