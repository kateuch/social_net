import React from 'react';

let store = {
	_state: {
		profilePage: {
		posts: [
		{id: 0, message: 'How are you?', likeCount: '17'},
		{id: 1, message: 'It\'s my first post', likeCount: '15'}
		],
		newPostText: 'Text'
	},
	dialogsPage: {
		dialogs: [
		{id: 0, name: 'Emma'},
		{id: 1, name: 'John'},
		{id: 2, name: 'Lola'}
		],
		messages: [
		{ id: 0, message: 'Hi!' },
		{ id: 1, message: 'How are you?' },
		{ id: 2, message: 'Yeah!' },
		{ id: 3, message: 'Yeah!' }
		]
	}},
	getState() {
		return this._state;
	},
	
	rerenderEntireTree () {
		console.log('state changed');
		},

	addPost () {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likeCount: '2'
			};
				this._state.profilePage.posts.push(newPost);
				this._state.profilePage.newPostText = '';
				this._rerenderEntireTree(this._state);
		}, 

	updateNewPostText (newText) {
		this._state.profilePage.newPostText = newText;
		this._rerenderEntireTree(this._state);
		//console.log(state.profilePage.posts.newPostText);
		},

	subscribe (observer) {
		this._rerenderEntireTree = observer; // pattern - observer
		}
};
	 

window.store = store;

export default store;