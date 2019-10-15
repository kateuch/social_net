import React, {Componets} from "react";
import style from './header.module.css';

const Header = () => {
        return (
                <header>
		<div className={ style.lable }>
			<img  src={require("./../pics/original/logo2.png")} />
				</div> 
				<div className = { style.name } >
    			ENOTE 
    			</div> 
    			</header>
)};

export default Header;