import React from 'react';
import './app.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderContainer from '../header/headerContainer';
import Navbar from '../navbar';
import ProfileContainer from '../profile/profileContainer';
import News from '../news';
import Music from '../music';
import Settings from '../settings';
import DialogsContainer from '../dialogs/dialogsContainer.js'; 
import UsersContainer from '../users/usersContainer';

const App = (props) => {
	  return (
         <div className='app-wrapper'>
		<HeaderContainer />
		<Navbar />
		<div className ='app-wrapper-content'>
		<Route path='/profile/:userId?' 
				render={ () => < ProfileContainer  />  }/>
		<Route path='/dialogs' 
				render={ () => < DialogsContainer  /> } />
		<Route path='/news' render={ () => < News /> } />
		<Route path='/music' render={ () => < Music /> } />
		<Route path='/settings' render={ () => < Settings /> } />
		<Route path='/users' render={ () => < UsersContainer /> } />
		</div>
		</div>
		
        )
};


export default App;