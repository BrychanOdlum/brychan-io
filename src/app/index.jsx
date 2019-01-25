import '@babel/polyfill';
import '../../node_modules/normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import './assets/styles/common.scss';

ReactDOM.render(<App />, document.getElementById('app-root'));

if (module.hot) {
  module.hot.accept();
}
