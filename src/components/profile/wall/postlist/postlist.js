import React from 'react';
import Post from './../post/post.js';


const PostList = (props) => {
	
	return (
	<div className='posts_list'>
		<Post 
		message={ props.posts.postData[0].message } 
		likeCount={ props.posts.postData[0].likeCount } 
		id= { props.posts.postData[0].id }  />
			<Post message ={ props.posts.postData[1].message } 
			likeCount= { props.posts.postData[1].likeCount } 
			id= { props.posts.postData[1].id }  />
			</div>
	)
	
}

export default PostList;