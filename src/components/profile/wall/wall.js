import React from 'react';
import "./wall.css";
import PostListContainer from './postlist/postlistContainer'


const Wall = (props) => {
	debugger
	let newPostElement = React.createRef();

	let onAddPost = () => {
			props.addPost();
			};  

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewText(text);
		};

		return (
			<div className="wall">
					<div className='area'>
						<span>New post</span>
							<textarea 
							placeholder='Enter your message'
							ref={ newPostElement } 
							onChange={ onPostChange }
							value={ props.newPostText } cols="30" rows="1" />
								<button className="button" onClick= { onAddPost } >Add post</button>
						</div>
						<PostListContainer />
						</div>
		)}

 export default Wall;

 