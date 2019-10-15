import React from 'react';

let state = {

	profilePage: {
		postData: [
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
	}}

export default state;