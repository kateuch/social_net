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
};

const dialogsReducer = (state = initialState, action) => {
	
	let stateCopy;

	switch (action.type) {
		case UPDATE_NEW_MES_TEXT:
			return {
			...state,
			newMessageText: action.newMes
			};
			
		case SEND_MES:
			let text = state.newMessageText;
			return  {
			...state,
			messages: [...state.messages, { id: 6, message: text } ],
			newMessageText: " "
			};					
		default:
			return state;
}};


export const sendMessageCreator = () => ({type: SEND_MES});
export const updateMessageBodyCreator = (text) => ({type: UPDATE_NEW_MES_TEXT, newMes: text});

export default dialogsReducer;