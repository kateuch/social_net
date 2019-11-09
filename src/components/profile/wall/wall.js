import React from 'react';
import "./wall.css";
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/state.js'


const Wall = (props) => {

	let newPostElement = React.createRef();

	let addPost = () => {
			//let text = newPostElement.current.value;
			//props.addPost();
			props.dispatch(addPostActionCreator());
			};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		//props.updateNewText(text);
		let action = updateNewPostActionCreator(text);
		props.dispatch(action);
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

 