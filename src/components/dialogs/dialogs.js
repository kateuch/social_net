import React from 'react';
import style from './dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './message';
import DialogItem from './dialog_item';
import { updateMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs_reducer.js'


const Dialogs = (props) => {
debugger;
let state = props.store.getState().dialogsPage;

let dialogsElements = state.dialogs.map( dialog => 
	<DialogItem name={ dialog.name } id={ dialog.id } /> );

let messagesElements = state.messages.map( message => 
	<Message message={ message.message } id={ message.id }/> ); 

let onSendMessageCklick = () => {
	props.store.dispatch(sendMessageCreator());
}
let newMessageText = state.newMessageText;

let onNewMessageChange = (event) => {
	let text = event.target.value;
	props.store.dispatch(updateMessageBodyCreator(text));
}

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
			<textarea 
					className={ style.textarea } cols="20" rows="1"
					placeholder='Enter your message'
					value = {newMessageText}
					onChange = {onNewMessageChange} ></textarea>
				<button className={style.button} onClick={ onSendMessageCklick }>Send</button>
					</div>
</div>
		)
}
export default Dialogs;