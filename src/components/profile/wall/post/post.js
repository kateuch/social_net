import React from 'react';
import style from "./post.module.css"

const Post = (props) => {

console.log(props.message);

	return (
		 <div className={ style.posts }>
		 	<div className={ style.item }>
		 		<img src={require("./../../../pics/avatar.png")} />
		 		<span>{ props.message }</span>
		 		<div className={style.counter}>
		 			<button className={style.button}>Like👍</button>
		 			<div className={ style.number }>{props.likeCount}</div>
		 			</div>
		 	</div>
		</div>
		)}

 export default Post;