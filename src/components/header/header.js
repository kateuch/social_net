import React, {Componets} from "react";
import style from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
        return (
                <header>
		<div className={ style.lable }>
			<img  src={require("./../pics/original/logo2.png")} />
				</div> 
				<div className = { style.name } >
    			ENOTE 
    			</div> 
    			<div className={ style.loginBlock }>
    			{props.isAuth ? props.login 
    				:	<NavLink to = {'/login'}>Sign in</NavLink> }
    			</div>
    			</header>
)};

export default Header;