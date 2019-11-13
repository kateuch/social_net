const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => 
	({ type: UPDATE_NEW_POST_TEXT, newText: text });

let initialSate = {
			posts: [
			{id: 0, message: 'How are you?', likeCount: '17'},
			{id: 1, message: 'It\'s my first post', likeCount: '15'}
			],
			newPostText: 'Text'
};

export const profileReducer = (state = initialSate, action) => {
	switch(action.type) {
		case ADD_POST:
		 let newPost = {
			id: 5,
			message: state.newPostText,
			likeCount: '2'
			};
				state.posts.push(newPost);
				state.newPostText = '';
				return state;

		case UPDATE_NEW_POST_TEXT:
		state.newPostText = action.newText;
				return state;
		
		default:
		return state;
}};


export default profileReducer;