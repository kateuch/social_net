import React from 'react';
import "./wall.css";


const Wall = (props) => {

	let addPost = () => {
		alert('samuraijs.com');
	}
		return (
			<div className="wall">
					<div className='area'>
						<span>New post</span>
							<textarea name="" id="" cols="30" rows="1"></textarea>
								<button onClick= { addPost } >Add post</button>
						</div>
						</div>
		)}

 export default Wall;