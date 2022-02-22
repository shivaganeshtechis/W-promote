import * as Actions from './actions';
import initialState from '../store/initialState';

export const PatentsReducer = (state = initialState.patents, action) => {
    switch (action.type) {
        case Actions.FETCH_PATENTS:
            return {
                ...state,
                ...action.payload.patents,
                results: [...action.payload.patents.results]
            };
        default:
            return state;
    }
};
