import React from 'react';
import {connect} from 'react-redux';
import { countUsersActionCreator, setIsFetchingActionCreator, followActionCreator, currentPageActionCreator, unfollowActionCreator, setUsersActionCreator} from '../../redux/friends_reducer.js';
import * as axios from 'axios';
import Friends from './friends.js';
import preloader from './../pics/5.svg'

class FriendsAPIComponent extends React.Component { 
	componentDidMount () {
		this.props.setIsFetching(true);
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
				.then(response => {
				this.props.setIsFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			
			});
			}	

	onPageChanged = (pageNumber) => {
			 this.props.setCurrentPage(pageNumber);
			 this.props.setIsFetching(true);
			 axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
				.then(response => {
				this.props.setIsFetching(false);
				this.props.setUsers(response.data.items);
	});
	}				

	render () {
		return	<>
			{this.props.isFetching ? <img src={preloader}/> : null}
			<Friends 
				totalUsersCount={this.props.totalUsersCount}
				pageSize ={this.props.pageSize}
				currentPage ={this.props.currentPage}
				onPageChanged = {this.onPageChanged}
				users= {this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				/>
				</> 
			}}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
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
		},
		setIsFetching: (isFetching) => {
			dispatch(setIsFetchingActionCreator(isFetching))
		}
		}};	
	

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsAPIComponent);

export default FriendsContainer;