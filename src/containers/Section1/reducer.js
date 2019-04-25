const initialState = {
    i9data: '',
    loading: false,
    error: false,
};

const reducer = ((state = initialState, action) => {
    switch (action.type) {
        case 'REQUESTED_I9_SECTION1':
            return {
                i9data: '',
                loading: true,
                error: false,
            };
        case 'REQUESTED_I9_SECTION1_SUCCEEDED':
            return {
                i9data: action.i9data,
                loading: false,
                error: false,
            };
        case 'REQUESTED_I9_SECTION1_FAILED':
            return {
                i9data: '',
                loading: false,
                error: true,
            };
        case 'LOAD_I9_SECTION1':
            return {
                data: action.data,
            };
        case 'SAVE_I9_SECTION1':
            return {
                payload: action.payload,
            };
        default:
            return state;
    }
});

export default reducer;

