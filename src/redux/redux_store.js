import { createStore, combineReducers } from 'redux';
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';

let reducers = combineReducers({
	profileReducer: profileReducer,
	dialogsReducer: dialogsReducer
});

let store = createStore(reducers);

export default store; 