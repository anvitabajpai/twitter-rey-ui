
// Action Creators
export function requestI9Section2(){
    return { type: 'REQUESTED_I9_SECTION2' }
}

export function requestI9Section2Success(data) {
    return { type: 'REQUESTED_I9_SECTION2_SUCCEEDED', i9data: JSON.stringify(data) }
}

export function requestI9Section2Error() {
    return { type: 'REQUESTED_I9_SECTION2_FAILED' }
}

export function fetch(orderId) {
    return { type: 'FETCHED_I9_SECTION2', orderId: orderId}
}

export function load(data) {
    return { type: 'LOAD_I9_SECTION2', data: data }
}

export function save(payload) {
    return { type: 'SAVE_I9_SECTION2', payload: payload}
}