import React from 'react';
import style from './friends.module.css';
import userPhoto from './../pics/person.jpg';

let Friends = (props) => {

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