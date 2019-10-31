import React from 'react';
import { rerenderEntireTree} from '../render.js';


let state = {
	profilePage: {
		posts: [
		{id: 0, message: 'How are you?', likeCount: '17'},
		{id: 1, message: 'It\'s my first post', likeCount: '15'}
		]
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

export let addPost = (postMessage) => {
debugger;
	let newPost = {
		id: 5,
		message: postMessage,
		likeCount: '2'
	};

state.profilePage.posts.push(newPost);
rerenderEntireTree(state);
}; 

export default state;