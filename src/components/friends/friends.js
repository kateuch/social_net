import React from 'react';
import { NavLink } from 'react-router-dom';



const Friends = (props) => {

let friends = [
	{ id: 0, name: 'Rebecca', surname: 'J.' },
	{ id: 1, name: 'Filipp', surname: 'O.' },
	{ id: 0, name: 'Lilia', surname: 'S.' }
];

//let path = "/friends/" + props.id

	return (
		<div className='friends'>
		<span>Друзя</span>
			<div className='friends_item'>
				{ friends.name }
			</div>
		</div>
		)
}
export default Friends;