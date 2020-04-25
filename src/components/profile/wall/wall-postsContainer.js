import React from 'react';
import Wall from './wall.js';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile_reducer.js'
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText
	}}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: (newPost) => {
			dispatch(addPostActionCreator(newPost))
		}
}}

let WallPostContainer = connect(mapStateToProps, mapDispatchToProps)(Wall);


 export default WallPostContainer;

 