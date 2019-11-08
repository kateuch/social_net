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

	_callSubscriber () {
		console.log('state changed');
	},


	getState() {
		return this._state;
	},
	subscribe (observer) {
		this._callSubscriber = observer; // pattern - observer
		},
	
	dispatch (action) {  //  {type: 'ADD-POST'}

		if (action.type === 'ADD-POST') {
			let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likeCount: '2'
			};
				this._state.profilePage.posts.push(newPost);
				this._state.profilePage.newPostText = '';
				this._callSubscriber(this._state);
		} else if (action.type ==='UPDATE-NEW-POST-TEXT') {
				this._state.profilePage.newPostText = action.newText;
				this._callSubscriber(this._state);
				//console.log(state.profilePage.posts.newPostText);
		}
	 }
	
};
	 

window.store = store;

export default store;