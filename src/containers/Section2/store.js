import  {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import i9Section2 from './reducer';
import {triggerSection2Saga} from './saga';
import { reducer as reduxFormReducer } from 'redux-form';


const reducer = combineReducers({
    i9Section2,
    form: reduxFormReducer, // mounted under "form"
});

// Store
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(triggerSection2Saga);
