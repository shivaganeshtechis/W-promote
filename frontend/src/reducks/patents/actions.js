export const FETCH_PATENTS = 'FETCH_PATENTS';
export const fetchpatentsAction = patents => {
    return {
        type: FETCH_PATENTS,
        payload: { patents },
    };
};
