import React from 'react';
import './profile_info.css';
import Preloader from './../../common/Preloader/preloader';
import ProfileStatus from './profile_status';


const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
	<div>
		<div className="avatar">
			<img src={ props.profile.photos.large? props.profile.photos.large : require("./../../pics/person.jpg")} alt="аватар" />
				</div>
				<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
					<div className="person_info">
						<div>aboutMe: {props.profile.aboutMe}</div>
						<div>I'm looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No' } </div>
						<div>My skills: {props.profile.lookingForAJobDescription}</div>
					</div>
					</div>
)}

export default ProfileInfo;