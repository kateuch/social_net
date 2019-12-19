import React from 'react';
import Profile from './profile';
import { setUserProfile} from '../../redux/profile_reducer.js';
import * as axios from 'axios';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
 
class  ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 5477;
		}
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId, {
			withCredentials: true,
			headers: {
				"API-KEY": "b748ba77-6052-49e6-ab5b-e3da15aaf5b4"
			}
		})
				.then(response => {
				this.props.setUserProfile(response.data);
				});
	}

	render () {
		return <Profile {...this.props} profile={this.props.profile} />
}};

let WithURLDataContainerComponent= withRouter(ProfileContainer); 

let mapStateToProps =(state)=> ({
	profile: state.profilePage.profile
});

 export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent);