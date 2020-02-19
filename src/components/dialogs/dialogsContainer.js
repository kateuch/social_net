import React from 'react';
import style from './dialogs.module.css';
//import { NavLink } from 'react-router-dom';
//import Message from './message';
//import DialogItem from './dialog_item';
import Dialogs from './dialogs';
import { updateMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs_reducer.js';
import {connect} from 'react-redux';
import {withAuthRedirect} from "../hoc/withAuthRedirect";


let mapStateToProps =(state) => ({
	dialogsPage: state.dialogsPage,
	isAuth: state.auth.isAuth
});

let mapDispatchToProps =(dispatch) => {
	return {
		updateMessageBody: (text) => {
			dispatch(updateMessageBodyCreator(text))
		},
		sendMessage: () => {
			dispatch(sendMessageCreator())
		}
	}
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;