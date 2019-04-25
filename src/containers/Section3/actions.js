
// Action Creators
export function requestI9Section3(){
    return { type: 'REQUESTED_I9_SECTION3' }
}

export function requestI9Section3Success(data) {
    return { type: 'REQUESTED_I9_SECTION3_SUCCEEDED', i9data: JSON.stringify(data) }
}

export function requestI9Section3Error() {
    return { type: 'REQUESTED_I9_SECTION3_FAILED' }
}

export function fetch(orderId) {
    return { type: 'FETCHED_I9_SECTION3', orderId: orderId}
}

export function load(data) {
    return { type: 'LOAD_I9_SECTION3', data: data }
}

export function save(payload) {
    return { type: 'SAVE_I9_SECTION3', payload: payload}
}