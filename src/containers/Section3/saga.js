import {
    put,
    takeEvery,
    call,
} from 'redux-saga/effects';
import {
    initialize,
} from 'redux-form/immutable';
import  axios  from 'axios';
import {requestI9Section2,
        requestI9Section2Success,
        requestI9Section2Error} from './actions';
import * as $C from './constants';

// Sagas
export function* triggerSection2Saga() {
    yield takeEvery('FETCHED_I9_SECTION2', executeFetchI9Section2AsyncSaga);
    yield takeEvery('SAVE_I9_SECTION2', executeSaveI9Section2AsyncSaga);
}


export function* executeFetchI9Section2AsyncSaga(action) {
    try {
        const data = {"orderId": "e663669f-f066-4eff-a3c4-bcd6e7b170d0",
            "formI9": {
                "section1": {
                    "givenName": "Bianca",
                    "familyName": "Bajpai",
                    "middleInitial": "K",
                    "middleInitialNA": false,
                    "otherFamilyNames": "SomeName",
                    "otherFamilyNamesNA": false,
                    "dob": "08/03/2000",
                    "awaitingSSN": false,
                    "ssn": "123456789",
                    "email": "anvita.bajpai2@gmail.com",
                    "emailNA": false,
                    "phone": "2345678907",
                    "phoneNA": false,
                    "eligibilityType": "AAW",
                    "alienNumber": "123456789",
                    "expirationDate": "08/07/2018",
                    "expirationDateNA": false,
                    "acknowledgement": true,
                    "address": {
                        "line1": "10710 NE 65th Ln",
                        "line2": "123",
                        "line2NA": false,
                        "municipality": "Kirkland",
                        "regionCode": "Washington",
                        "countryCode": "Afghanistan",
                        "postalCode": "98033"
                    },
                    "empAuthDoc": "foreignpp",
                    "issuingCountry": "United States of America",
                    "foreignPassportNo": "123456789"
                }
            }
        }
        yield put(requestI9Section2Success(data));
        yield put(
            initialize('Section2ContentRendered', data, {
                keepDirty: true,
                updateUnregisteredFields: true,
            }),
        );
    } catch (error) {
        yield put(requestI9Section2Error());
    }

}

export function* executeSaveI9Section2AsyncSaga(action) {
    try {
         yield call(saveI9Section2ApiCall, action.payload);
    } catch (error) {
        console.log(error);
    }
}

function saveI9Section2ApiCall(payload) {
    return axios({
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        url: $C.WFD_SAVE_I9SECTION2_DATA,
        data: payload
});
}
