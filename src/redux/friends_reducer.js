const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
			users: [
			/*{id: 0, avatar: require('./../components/pics/person.jpg'), follow: true, name: 'Emma', status: 'Hi, guys' , location: {city: 'Moscow', country: 'Russia'} },
			{id: 1, avatar: require('./../components/pics/person.jpg'), follow: true, name: 'Luck', status: 'Hi, guys. Yo-yo!' , location: {city: 'Cidney', country: 'Australia'} },
			{id: 2, avatar: require('./../components/pics/person.jpg'), follow: false,  name: 'Emma', status: 'I\'m here'  , location: {city: 'Berlin', country: 'Germany'} }*/
		]};

const friendsReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				//users:[...state.users] //запись идентичная нижней
				users: state.users.map ( u => {
					if (u.id === action.userId) {
					return {...u, follow: false}
				}
				return u;
			})
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map ( u => {
					if (u.id === action.userId) {
					return {...u, follow: true}
				}
				return u;	
			})
			}

		case SET_USERS:
				return {...state, users: [...state.users, ...action.users]};
									
		default:
			return state;
}};

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default friendsReducer;