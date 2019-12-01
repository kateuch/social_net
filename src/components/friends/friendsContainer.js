import React from 'react';
import {connect} from 'react-redux';
import Friends from './friends.js';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator} from '../../redux/friends_reducer.js';


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
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
			}
		}};	
	

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;