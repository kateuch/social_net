import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter, Route } from 'react-router-dom';
import state from './redux/state';

ReactDOM.render((
	 <BrowserRouter>
	 <App state={ state }/>
	  </BrowserRouter> 
	  ), document.getElementById('root'));

if (module.hot) {
	module.hot.accept();
}