import React from 'react';
import style from './dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './message';
import DialogItem from './dialog_item';



const Dialogs = (props) => {

let dialogsElements = props.dialogs.dialogs.map( dialog => 
	<DialogItem name={ dialog.name } id={ dialog.id } />
);


let messagesElements = props.message.messages.map( message => 
	<Message message={ message.message } id={ message.id }/>
);

	return (
<div>
	<div className={ style.dialogs }>
		<div className={ style.dialog_items} >
			{ dialogsElements }
			</div>
		<div className={ style.messages }>
			{ messagesElements }
				</div>
	</div>
		<div className={ style.newMessage }>
			<textarea className={ style.textarea } cols="20" rows="1"></textarea>
				<button className={style.button} onClick={ () => { alert("jhkjgsh") }}>Send</button>
					</div>
</div>
		)
}
export default Dialogs;