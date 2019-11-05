import React from 'react';

let rerenderEntireTree = () => {
	console.log('state changed');
}


let state = {
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
	}};

	window.state = state; 

export let addPost = () => {

	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likeCount: '2'
	};

state.profilePage.posts.push(newPost);
state.profilePage.newPostText = '';
rerenderEntireTree(state);
}; 

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
	//console.log(state.profilePage.posts.newPostText);
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
}

export default state;