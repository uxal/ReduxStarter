/**
 * Redux setup
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import translationsObject from '../localization/index';

const configureStore = (context) => {
  // See https://github.com/zalmoxisus/redux-devtools-extension#usage
  const getComposeEnhancers = () => {
    if (typeof window !== 'undefined') {
      return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }
    return compose;
  };
  const store = createStore(
    reducers,
    getComposeEnhancers()(applyMiddleware(thunk)),
  );

  syncTranslationWithStore(store);
  store.dispatch(loadTranslations(translationsObject));
  // Set the language we want
  store.dispatch(setLocale(process.env.LANGUAGE));

  return store;
};


export default configureStore;
