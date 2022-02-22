import API from '../../API';
import { fetchpatentsAction } from './actions';

const api = new API();

export const fetchpatents = (query = {}, onSuccess = () => {}) => {
    return async dispatch => {
        return api.getPatents(query).then(patents => {
            dispatch(fetchpatentsAction(patents));
            onSuccess();
        });
    };
};
