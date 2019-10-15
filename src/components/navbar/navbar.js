import React from 'react';
import NavStyle from "./navbar.module.css"
import { NavLink } from 'react-router-dom';


const Navbar = () => {
	return (
		<nav className={ NavStyle.links }>
		<div className={ NavStyle.item }>
		<NavLink to ="/profile" className={ NavStyle.active } >Profile</NavLink>
		</div>
		<div className={ NavStyle.item }>
		<NavLink to="/dialogs"  className={ NavStyle.active } >Messages</NavLink>
		</div>
		<div className={ NavStyle.item }>
		<NavLink to="news" className={ NavStyle.active } >News</NavLink>
		</div>
		<div className={ NavStyle.item }>
		<NavLink to="music" className={ NavStyle.active } >Music</NavLink>
		</div>
		<div className={ NavStyle.item }>
		<NavLink to="parametrs" className={ NavStyle.active } >Settings</NavLink>
		</div>
		<div className={ NavStyle.item }>
		<NavLink to="/friends" className={ NavStyle.active } >Friends</NavLink>
			<div className='friends_item'>Друзя</div>
		</div>
		</nav>
		)
	};

	export default Navbar;

