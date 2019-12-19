import React from 'react';
import {connect} from 'react-redux';
import { setTotalUsersCount, setIsFetching, follow, setCurrentPage, unfollow, setUsers} from '../../redux/users_reducer.js';
import * as axios from 'axios';
import Users from './users';
import Preloader from '../common/Preloader/preloader'

class UsersContainer extends React.Component { 
	componentDidMount () {
			this.props.setIsFetching(true);
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, 
			{
				withCredentials: true,
				headers: {
					"API-KEY": "b748ba77-6052-49e6-ab5b-e3da15aaf5b4"
				}
			})
				.then(response => {
				this.props.setIsFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			
			});
			}	

	onPageChanged = (pageNumber) => {
			 this.props.setCurrentPage(pageNumber);
			 this.props.setIsFetching(true);
			 axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, 
			 {
				 withCredentials: true,
				 headers: {
					"API-KEY": "b748ba77-6052-49e6-ab5b-e3da15aaf5b4"
				}
			 })
				.then(response => {
				this.props.setIsFetching(false);
				this.props.setUsers(response.data.items);
	});
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
let mapDispatchToProps = {
	follow, unfollow, setUsers,	setCurrentPage, setTotalUsersCount, setIsFetching
	};	
	

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);