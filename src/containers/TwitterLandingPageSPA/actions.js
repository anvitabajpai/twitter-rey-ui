// Action Creators
export function requestSearchSPAResults(){
    return { type: 'REQUESTED_SEARCH_SPA_RESULTS' }
}

export function requestSearchSPAResultsSuccess(data) {
    return { type: 'REQUESTED_SEARCH_SPA_RESULTS_SUCCEEDED', result: JSON.stringify(data) }
}

export function requestSearchSPAResultsError() {
    return { type: 'REQUESTED_SEARCH_SPA_RESULTS_FAILED' }
}

export function fetch(searchKeyWord) {
    return { type: 'FETCHED_SEARCH_SPA_RESULTS', searchKeyWord: searchKeyWord}
}

export function load(data) {
    return { type: 'LOAD_SEARCH_SPA_RESULTS', data: data }
}

export function save(payload) {
    return { type: 'SAVE_SEARCH_SPA_RESULTS', payload: payload}
}