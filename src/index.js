import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './css/index.css';
import Routes from './Routes';
import {store} from './containers/SearchSPA/store'
const rootEl = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
      <div>
          <Routes />
      </div>
  </Provider>,
  rootEl,
);
if (module.hot) {
    module.hot.accept();
}
