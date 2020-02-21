import React from 'react';
import { connect } from 'react-redux';
import { getUsers, follow, setCurrentPage, setFollowProgress,unfollow } from '../../redux/users_reducer.js';
import Preloader from '../common/Preloader/preloader';
import Users from './users';
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import { compose } from 'redux';

class UsersContainer extends React.Component { 
	
	componentDidMount () {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
			}	

	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
			}				

	render () {
		
		return	<>
			{this.props.isFetching ?
				< Preloader /> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize ={this.props.pageSize}
				currentPage ={this.props.currentPage}
				onPageChanged = {this.onPageChanged}
				users= {this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followProgress={this.props.followProgress}
				/>
				</> 
			}}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followProgress: state.usersPage.followProgress
	}
};
let mapDispatchToProps = {follow, unfollow, setCurrentPage,
		setFollowProgress, getUsers	};	

export default compose( 
	withAuthRedirect,
	connect(mapStateToProps, {follow, unfollow, setCurrentPage,
				setFollowProgress, getUsers	})
)
	(UsersContainer);
