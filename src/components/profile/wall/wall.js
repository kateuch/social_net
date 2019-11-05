import React from 'react';

import "./wall.css";



const Wall = (props) => {

	let newPostElement = React.createRef();

	let addPost = () => {
			//let text = newPostElement.current.value;
			props.addPost();
			};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
		};

		console.log(props.newPostText);

		return (
			<div className="wall">
					<div className='area'>
						<span>New post</span>
							<textarea 
							ref={ newPostElement } 
							onChange={ onPostChange }
							value={ props.newPostText } cols="30" rows="1" />
								<button className="button" onClick= { addPost } >Add post</button>
						</div>
						</div>
		)}

 export default Wall;

 