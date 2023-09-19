import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import './index.css';
import Banner from './components/Banner';

if (module.hot) {
  module.hot.accept()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Banner />
  </Provider>
);