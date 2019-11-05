import React from 'react';
import ReactDOM from 'react-dom';
import state from './redux/state';
import App from './components/app';
import { BrowserRouter, Route } from 'react-router-dom';
import { addPost, updateNewPostText, subscribe} from './redux/state';

let rerenderEntireTree = (state) => {

ReactDOM.render((
	 <BrowserRouter>
	 <App 
	 	state={ state } 
	 	addPost={ addPost } 
	 	updateNewPostText = { updateNewPostText }/>
	  </BrowserRouter> 
	  ), document.getElementById('root'));

if (module.hot) {
	module.hot.accept();
}}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
