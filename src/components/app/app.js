import React from 'react';
import './app.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../header';
import Navbar from '../navbar';
import Profile from '../profile';
import News from '../news';
import Music from '../music';
import Settings from '../settings';
import Wall from '../profile/wall/wall.js';
import Post from '../profile/wall/post/post.js';
import Dialogs from '../dialogs'; 
import Friends from '../friends';

const App = (props) => {

        return (
         <div className='app-wrapper'>
		<Header />
		<Navbar />
		<div className ='app-wrapper-content'>
		<Route path='/profile' 
				render={ () => < Profile 
					profilePage ={ props.state.profilePage} 
					dispatch={props.dispatch} />  }/>
		<Route path='/dialogs' 
				render={ () => 	< Dialogs 
					dialogs= { props.state.dialogsPage } 
					message={props.state.dialogsPage } /> } />
		<Route path='/news' render={ () => < News /> } />
		<Route path='/music' render={ () => < Music /> } />
		<Route path='/settings' render={ () => < Settings /> } />
		<Route path='/friends' render={ () => < Friends /> } />
		</div>
		</div>
		
        )
};


export default App;