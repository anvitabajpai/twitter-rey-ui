import  {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import i9Section1 from './reducer';
import {triggerSection1Saga} from './saga';
import { reducer as reduxFormReducer } from 'redux-form';


const reducer = combineReducers({
    i9Section1,
    form: reduxFormReducer, // mounted under "form"
});

// Store
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(triggerSection1Saga);
