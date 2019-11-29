import React from 'react';
import PostList from './postlist.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
	debugger
	return {
		posts: state.profilePage.posts
	}};

let PostListContainer = connect(mapStateToProps)(PostList);

export default PostListContainer;