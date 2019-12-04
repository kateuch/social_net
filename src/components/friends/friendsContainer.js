import React from 'react';
import {connect} from 'react-redux';
import Friends from './friends.js';
import { countUsersActionCreator, followActionCreator, currentPageActionCreator, unfollowActionCreator, setUsersActionCreator} from '../../redux/friends_reducer.js';


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followActionCreator(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowActionCreator(userId))
			},
		setUsers: (users) => {
			dispatch(setUsersActionCreator(users))
			},
		setCurrentPage: (pageNumber) => {
			dispatch(currentPageActionCreator(pageNumber))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(countUsersActionCreator(totalCount))
		}
		}};	
	

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;