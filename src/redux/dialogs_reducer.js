const UPDATE_NEW_MES_TEXT = 'UPDATE-NEW-MES-TEXT';
const SEND_MES = 'SEND-MES';


let initialState = {
			dialogs: [
			{id: 0, name: 'Emma'},
			{id: 1, name: 'John'},
			{id: 2, name: 'Lola'}
			],
			messages: [
			{ id: 0, message: 'Hi!' },
			{ id: 1, message: 'How are you?' },
			{ id: 2, message: 'Yeah!' },
			{ id: 3, message: 'Yeah!' }
			],
			newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
	debugger
	switch (action.type) {
		case UPDATE_NEW_MES_TEXT:
		state.newMessageText = action.newMes;
			return state;

		case SEND_MES:
		let text = state.newMessageText;
			state.newMessageText = "";
			state.messages.push( { id: 6, message: text });
			return state;
		default:
		return state;
}};


export const sendMessageCreator = () => ({type: SEND_MES});
export const updateMessageBodyCreator = (text) => ({type: UPDATE_NEW_MES_TEXT, newMes: text});

export default dialogsReducer;