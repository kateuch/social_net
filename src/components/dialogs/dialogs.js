import React from 'react';
import style from './dialogs.module.css';
import Message from './message';
import DialogItem from './dialog_item';
import { Field, reduxForm } from 'redux-form';

const DialogsForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} >
			<div>
				<Field className={ style.textarea } cols="20" rows="1"
					placeholder={'Enter your message'}
					name = {'newMessage'}
					component={'textarea'} />
			</div>
			<div>
				<button type="submit">Send</button>
			</div>
		</form>
	)
}
const DialoxReduxForm = reduxForm({form: "message"})(DialogsForm);

const Dialogs = (props) => {

let dialogsElements = props.dialogsPage.dialogs.map( dialog => 
	<DialogItem name={ dialog.name } id={ dialog.id } /> );

let messagesElements = props.dialogsPage.messages.map( message => 
	<Message message={ message.message } id={ message.id }/> ); 


const newMessageText = (value) => {
	props.sendMessage(value.newMessage);
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
			<DialoxReduxForm onSubmit={newMessageText} />
					</div>
</div>
)}

export default Dialogs;