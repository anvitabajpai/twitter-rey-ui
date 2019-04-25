
// Action Creators
export function requestI9Section1(){
    return { type: 'REQUESTED_I9_SECTION1' }
}

export function requestI9Section1Success(data) {
    return { type: 'REQUESTED_I9_SECTION1_SUCCEEDED', i9data: JSON.stringify(data) }
}

export function requestI9Section1Error() {
    return { type: 'REQUESTED_I9_SECTION1_FAILED' }
}

export function fetch(orderId) {
    return { type: 'FETCHED_I9_SECTION1', orderId: orderId}
}

export function load(data) {
    return { type: 'LOAD_I9_SECTION1', data: data }
}

export function save(payload) {
    return { type: 'SAVE_I9_SECTION1', payload: payload}
}