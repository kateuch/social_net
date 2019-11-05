import React from 'react';
import "./profile.css";
import Wall from "./wall/wall.js";
import ProfileInfo from './profile_info';
import PostList from './wall/postlist';

const Profile = (props) => {

	return (
		<div className="content">
			<div className="back">
				</div>
				<ProfileInfo />
				<Wall 
					addPost={ props.addPost } 
					newPostText = { props.profilePage.newPostText } 
					updateNewPostText = { props.updateNewPostText }/>
				<PostList 
					posts={ props.profilePage.posts } 
					newPostText = { props.profilePage.newPostText } 
					addPost={ props.addPost }
					 />
				</div>
		)
}
 export default Profile;