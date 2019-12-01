import React from 'react';
import './app.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../header';
import Navbar from '../navbar';
import Profile from '../profile';
import News from '../news';
import Music from '../music';
import Settings from '../settings';
import DialogsContainer from '../dialogs/dialogsContainer.js'; 
import FriendsContainer from '../friends/friendsContainer';

const App = (props) => {
	  return (
         <div className='app-wrapper'>
		<Header />
		<Navbar />
		<div className ='app-wrapper-content'>
		<Route path='/profile' 
				render={ () => < Profile  />  }/>
		<Route path='/dialogs' 
				render={ () => < DialogsContainer  /> } />
		<Route path='/news' render={ () => < News /> } />
		<Route path='/music' render={ () => < Music /> } />
		<Route path='/settings' render={ () => < Settings /> } />
		<Route path='/friends' render={ () => < FriendsContainer /> } />
		</div>
		</div>
		
        )
};


export default App;