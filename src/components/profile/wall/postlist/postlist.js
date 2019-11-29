import React from 'react';
import Post from './../post/post.js';


const PostList = (props) => {
		debugger
	let postElement = props.posts.map(post =>
		<Post id={post.id} message={post.message} likeCount={post.likeCount}  /> 
		)
	return (
	<div className='posts_list'>
			{ postElement }
			</div>
	)}


export default PostList;