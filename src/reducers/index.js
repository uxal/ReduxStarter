import { combineReducers } from 'redux';
import testReducer from './test_reducer';

const rootReducer = combineReducers({
    /*Add the reducers in here*/
    test: testReducer
});

export default rootReducer;