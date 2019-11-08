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
					dispatch={ props.dispatch } 
					/>
				<PostList 
					posts={ props.profilePage.posts } 
					newPostText = { props.profilePage.newPostText } 
					dispatch={ props.dispatch }
					 />
				</div>
		)
}
 export default Profile;