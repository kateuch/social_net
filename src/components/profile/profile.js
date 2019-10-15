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
				<Wall />
				<PostList posts={props.posts} />
				</div>
		)
}
 export default Profile;