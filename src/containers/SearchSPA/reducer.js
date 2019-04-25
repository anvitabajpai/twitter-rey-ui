const initialState = {
    result: '',
    loading: false,
    error: false,
};

const reducer = ((state = initialState, action) => {
    switch (action.type) {
        case 'REQUESTED_SEARCH_SPA_RESULTS':
            return {
                result: '',
                loading: true,
                error: false,
            };
        case 'REQUESTED_SEARCH_SPA_RESULTS_SUCCEEDED':
            return {
                result: action.result,
                loading: false,
                error: false,
            };
        case 'REQUESTED_SEARCH_SPA_RESULTS_FAILED':
            return {
                result: '',
                loading: false,
                error: true,
            };
        case 'LOAD_SEARCH_SPA_RESULTS':
            return {
                data: action.data,
            };
        case 'SAVE_SEARCH_SPA_RESULTS':
            return {
                payload: action.payload,
            };
        default:
            return state;
    }
});

export default reducer;

