import React from 'react';
import style from './dialogs.module.css';
//import { NavLink } from 'react-router-dom';
//import Message from './message';
//import DialogItem from './dialog_item';
import Dialogs from './dialogs';
import { sendMessageCreator} from '../../redux/dialogs_reducer.js';
import {connect} from 'react-redux';
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import { compose } from 'redux';


let mapStateToProps = (state) => ({
	dialogsPage: state.dialogsPage,
	isAuth: state.auth.isAuth
});

let mapDispatchToProps =(dispatch) => {
	return {
		sendMessage: (newMessageText) => {
			dispatch(sendMessageCreator(newMessageText))
			console.log(newMessageText)}
		}
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);