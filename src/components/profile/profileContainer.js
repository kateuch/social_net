import React from 'react';
import Profile from './profile';
import { getUserProfile} from '../../redux/profile_reducer.js';
import {connect} from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import {withAuthRedirect} from "../hoc/withAuthRedirect";
 
class  ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 5477;
		}
		this.props.getUserProfile(userId);
	}
	render () {
		return <Profile {...this.props} profile={this.props.profile} />
		}};

let AuthRedirectComponent =  withAuthRedirect(ProfileContainer);

let mapStateToProps =(state)=> ({
		profile: state.profilePage.profile,
	});

let WithURLDataContainerComponent = withRouter(AuthRedirectComponent);

 export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent);