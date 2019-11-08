import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/state';
import App from './components/app';
import { BrowserRouter, Route } from 'react-router-dom';


let rerenderEntireTree = (state) => {

ReactDOM.render((
	 <BrowserRouter>
	 <App 
	 	state={ state } 
	 	dispatch={ store.dispatch.bind(store) } />
	  </BrowserRouter> 
	  ), document.getElementById('root'));

if (module.hot) {
	module.hot.accept();
}}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
