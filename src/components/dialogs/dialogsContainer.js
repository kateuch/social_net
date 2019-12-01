import React from 'react';
import style from './dialogs.module.css';
//import { NavLink } from 'react-router-dom';
//import Message from './message';
//import DialogItem from './dialog_item';
import Dialogs from './dialogs';
import { updateMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs_reducer.js';
import {connect} from 'react-redux';

let mapStateToProps =(state) => {
	return {
		dialogsPage: state.dialogsPage
		}
};

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;