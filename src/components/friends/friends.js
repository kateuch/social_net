import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './friends.module.css';
import * as axios from 'axios';
import userPhoto from './../pics/person.jpg';


let Friends = (props) => { 

let getUsers = () => {
		if (props.users.length === 0) {

		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			debugger
			props.setUsers(response.data.items);
		})
	}};
	
	return	<div className='friends'>
			<button onClick={getUsers}>Get Users</button>
			{
			 props.users.map(u => <div key={u.id}>
				<span>
					<div>
						<img src={ u.photos.small !=null ? u.photos.small : userPhoto }  className={style.userAvatar}/>
					</div>
					<div>
					{u.follow 
						? <button onClick={() => {props.follow(u.id)} }>Follow</button> 
						: <button onClick={() => {props.unfollow(u.id)} }>Unfollow</button>}
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

export default Friends;