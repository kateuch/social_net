import React from 'react';
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';

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
			],
			newMessageText: ''
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

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);


		this._callSubscriber(this._state);
	},
};
	 

window.store = store;

export default store;