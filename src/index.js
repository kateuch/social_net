import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux_store.js';
import App from './components/app';
import { BrowserRouter, Route } from 'react-router-dom';


let rerenderEntireTree = (state) => {
	debugger

ReactDOM.render((
	 <BrowserRouter>
	 <App 
	 	state={store.getState()} 
	 	dispatch = { store.dispatch.bind(store) }
	 	store = {store} />
	  </BrowserRouter> 
	  ), document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe = (() => {
	let state = store.getState();
	rerenderEntireTree(state);
} );

if (module.hot) {
	module.hot.accept();
}