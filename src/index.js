import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app'

import configureStore from './domain';
const store = configureStore();

const render = Component => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.querySelector('#app'),
  );
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  console.log('re-rednering 1');
  module.hot.accept('./app', () => {
    render(App);
    console.log('re-rendering 2');
    // in all other cases - re-require App manually
    render(require('./app'))
  })
}