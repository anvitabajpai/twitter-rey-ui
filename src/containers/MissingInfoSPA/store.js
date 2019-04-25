import  {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import searchSPAResults from './reducer';
import {triggerSearchSPASaga} from './saga';
import { reducer as reduxFormReducer } from 'redux-form';


const reducer = combineReducers({
    searchSPAResults,
    form: reduxFormReducer, // mounted under "form"
});

// Store
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(triggerSearchSPASaga);
