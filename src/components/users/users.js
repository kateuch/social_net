import React from 'react';
import style from './users.module.css';
import userPhoto from './../pics/person.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let Users = (props) => {
let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	
let pages = [];
for ( let i=1; i <= pagesCount; i++) {
pages.push(i);
}
	return 	<div>
			<div> 
				{pages.map( p => { 
					return <span className={props.currentPage === p && style.selected}
					onClick={ () => 
						{props.onPageChanged(p);
						 }}>{p}</span>
				})}		
			</div>
			{
			 props.users.map(u => <div key={u.id}>
				<span>
					<div>
						<NavLink to={'/profile/' + u.id}>
							<img src={ u.photos.small !=null ? u.photos.small : userPhoto }  className={style.userAvatar}/>
						</NavLink>
					</div>
					<div>
					{u.followed 
						? <button onClick = {() => {
							axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {} , 
							{ 
								withCredentials: true, 
								headers: {
									"API-KEY": "b748ba77-6052-49e6-ab5b-e3da15aaf5b4"
								}
							})
									.then(response => {
									if (response.data.resultCode == 0) {
										props.follow(u.id);
									}
								});
								}}>Follow</button>

						: <button onClick={() => {
							axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, 
							{ 
								withCredentials: true,
								headers: {
									"API-KEY": "b748ba77-6052-49e6-ab5b-e3da15aaf5b4"
								}
							})
							.then (response => {
							if (response.data.resultCode == 0) {
								props.unfollow(u.id);
							}
						});
					}}>Unfollow</button>
					}
					</div>
				</span>
				<span>
					<span>
						<div>{u.name}</div>
						<div>{u.status}</div>
					</span>
					<span>
					<div>{'u.location.city'}</div>
					<div>{'u.location.country'}</div>
					</span>
				</span>
				</div> 
			)}
		</div> 
		}



export default Users;