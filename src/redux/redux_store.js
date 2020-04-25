import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import usersReducer from './users_reducer';
import authReducer from './auth_reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
	profilePage: profileReducer, 
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store; 