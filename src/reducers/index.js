import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { i18nReducer } from 'react-redux-i18n';
// Import other reducers below

const rootReducer = combineReducers({

  form: formReducer,
  i18n: i18nReducer,
});

export default rootReducer;
