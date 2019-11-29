import React from 'react';
import "./profile.css";
import WallPostContainer from "./wall/wall-postsContainer.js";
import ProfileInfo from './profile_info';
import PostListContainer from './wall/postlist/postlistContainer.js';

const Profile = (props) => {
	return (
		<div className="content">
			<div className="back">
				</div>
				<ProfileInfo />
				<WallPostContainer />
						</div>
		)
}
 export default Profile;