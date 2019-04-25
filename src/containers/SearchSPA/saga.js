import {
    put,
    takeEvery,
    call,
} from 'redux-saga/effects';
import {
    initialize,
} from 'redux-form/immutable';
import  axios  from 'axios';
import {
    requestSearchSPAResults,
    requestSearchSPAResultsSuccess,
    requestSearchSPAResultsError
} from './actions';
import * as $C from './constants';

// Sagas
export function* triggerSearchSPASaga() {
    yield takeEvery('FETCHED_SEARCH_SPA_RESULTS', executeFetchSearchSpaAsyncSaga);
    yield takeEvery('SAVE_SEARCH_SPA_RESULTS', executeSaveSearchSpaAsyncSaga);
}


export function* executeFetchSearchSpaAsyncSaga(action) {
    try {
        const SEARCH_KEY_WORD = action.searchKeyWord;
        const URL = $C.ABSCORE_ACCOUNTDB_ENDPOINT+SEARCH_KEY_WORD;
        yield put(requestI9Section1());
        const response = yield call(
            axios.get,
            //$C.WFD_LOAD_I9SECTION1_DATA
            URL
        );
        const { data } = response;
        yield put(requestSearchSPAResultsSuccess(data));
        yield put(
            initialize('SearchSPAContentRendered', data, {
                keepDirty: true,
                updateUnregisteredFields: true,
            }),
        );
    } catch (error) {
        yield put(requestSearchSPAResultsError());
    }

}

export function* executeSaveSearchSpaAsyncSaga(action) {
    try {
         yield call(saveSearchSpaApiCall, action.payload);
    } catch (error) {
        console.log(error);
    }
}

function saveSearchSpaApiCall(payload) {
    return axios({
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        url: $C.WFD_SAVE_I9SECTION1_DATA,
        data: payload
});
}
