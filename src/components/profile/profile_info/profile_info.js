import React from 'react';
import './profile_info.css';


const ProfileInfo = (props) => {
	return (
	<div>
		<div className="avatar">
			<img src={require("./../../pics/person.jpg")} alt="аватар" />
				</div>
					<div className="person_info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui perspiciatis itaque architecto inventore, minus vel voluptatibus autem dolorum, eveniet dicta nisi animi fugit officia voluptas ea hic odio tempora odit.
					</div>
					</div>
)}

export default ProfileInfo;