import React from 'react';

import "./wall.css";


const Wall = (props) => {

	let newPostElement = React.createRef();

	let addPost = () => {
			debugger
			let text = newPostElement.current.value;
			props.addPost(text);

		}

		return (
			<div className="wall">
					<div className='area'>
						<span>New post</span>
							<textarea ref={ newPostElement } cols="30" rows="1"></textarea>
								<button className="button" onClick= { addPost } >Add post</button>
						</div>
						</div>
		)}

 export default Wall;

 