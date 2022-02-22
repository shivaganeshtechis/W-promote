const initialState = {
    user: {
        errors: {
            email: null,
            password: null,
            password_confirm: null,
            error: null
        }
    },
    favourite: {
        list: []
    },
    patents: {
        results: []
    }
};

export default initialState;
