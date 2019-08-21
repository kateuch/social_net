import React from 'react';
import './app.css';
import Header from '../header';
import Navbar from '../navbar';
import Profile from '../profile';


const App = () => {
	return (
	<div className='app-wrapper'>
	<Header />
	<Navbar />
	<Profile />
		</div>
)};


export default App;