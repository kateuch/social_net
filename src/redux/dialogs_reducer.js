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
};

const dialogsReducer = (state = initialState, action) => {
	
	let stateCopy;

	switch (action.type) {
		case SEND_MES:
			let text = action.newMessageText;
			return  {
				...state,
				messages: [...state.messages, { id: 6, message: text } ]
			};					
		default:
			return state;
}};


export const sendMessageCreator = (newMessageText) => ({type: SEND_MES, newMessageText});


export default dialogsReducer;