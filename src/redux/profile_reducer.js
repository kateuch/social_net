const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
			posts: [
			{id: 0, message: 'How are you?', likeCount: '17'},
			{id: 1, message: 'It\'s my first post', likeCount: '15'}
			],
			newPostText: ' '
};

export const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST: {
		 let newPost = {
			id: 5,
			message: state.newPostText,
			likeCount: '2'
			};

			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			};
		}
		case UPDATE_NEW_POST_TEXT:{
			return {
				...state,
				newPostText: action.newText
			};
		}
		default:
		return state;
}};


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => 
	({ type: UPDATE_NEW_POST_TEXT, newText: text });


export default profileReducer;