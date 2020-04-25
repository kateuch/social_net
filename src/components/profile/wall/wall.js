import React from 'react';
import "./wall.css";
import PostListContainer from './postlist/postlistContainer'
import { Field, reduxForm } from 'redux-form';

const AddNewPostForm = (props) => {
	return (
	<form onSubmit = {props.handleSubmit}> 
		<div>
			<Field className={ 'style.textarea' } cols="20" rows="1"
					placeholder={'Type message'}
					name = {'newPost'}
					component={'textarea'} />
				<div>
				<button type="submit" className="button">Add post</button>
				</div>
			</div>	
		</form>
	)
}

const NewPostReduxForm = reduxForm({form: "post"})(AddNewPostForm);

const Wall = (props) => {

	const submitData = (values) => {
		props.addPostActionCreator(values.newPost);
	}
		return (
			<div className="wall">
					<div className='area'>
						<span>New post</span>
							<NewPostReduxForm onSubmit={submitData}/>
						</div>
						<PostListContainer />
						</div>
		)
	}


 export default Wall;