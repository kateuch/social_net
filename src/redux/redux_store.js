import { createStore, combineReducers } from 'redux';
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import usersReducer from './friends_reducer';


let reducers = combineReducers({
	profilePage: profileReducer, 
	dialogsPage: dialogsReducer,
	usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store; 