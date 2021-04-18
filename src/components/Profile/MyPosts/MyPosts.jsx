import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import React from 'react';
//import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
//import MyPostsContainer from "./MyPostsContainer";


const MyPosts = (props) => {

  
  let postsElements = props.posts.map( (p) => {
    return <Post message={p.message} likesCount={p.likesCount}/>
  });
  
  let newPostElement = React.createRef();

  let onAddPost = () =>  {


   
   props.addPost();
   
  
  }

let onPostChange = () => {
  let text = newPostElement.current.value;

  props.updateNewPostText(text); //text отправляется в бизнес setStatePost
}



  return (
  <div className={s.postsBlock}>
    <h3>My post</h3>
    <div>
      <div>
      <textarea onChange = {onPostChange} ref={newPostElement} value = {props.newPostText}/> {/*v 34 
      {props.newPostText} v 31 привязка ссылки к конкр. textarea, + v 38*/}
      
      </div>
      <div><button onClick={onAddPost}>Add post</button>
      </div>
      

      <div className={s.posts}>
        {postsElements}
        
        
      </div>
        
    </div>
  </div>  
  )}

export default MyPosts;


/*const MyPosts = (props) => {

  //debugger;
  let postsElements = props.posts.map( (p) => {
    return <Post message={p.message} likesCount={p.likesCount}/>
  });
  
  let newPostElement = React.createRef();

  let onAddPost = () =>  {//onAddPost вешаем на onClick


   //let text = newPostElement.current.value;
   props.addPost();//берем addPost из props
   //props.dispatch(addPostActionCreator());
   //props.dispatch({type: 'ADD-POST'});{/*с бизнес уров пришла ф-ция addPost через props }
   //props.updateNewPostText("");// для обнулении
  
  }

let onPostChange = () => {
  let text = newPostElement.current.value;
  //let action = {type: "UPDATE-NEW-POST-TEXT" , newText: text}
  //let action = updateNewPostTextActionCreator(text);
 // props.dispatch (action);
  props.updateNewPostText(text); //text отправляется в бизнес setStatePost
}



  return (
  <div className={s.postsBlock}>
    <h3>My post</h3>
    <div>
      <div>
      <textarea onChange = {onPostChange} ref={newPostElement} value = {props.newPostText}/> {/*v 34 
      {props.newPostText} v 31 привязка ссылки к конкр. textarea, + v 38/}
      
      </div>
      <div><button onClick={onAddPost}>Add post</button>
      </div>
      

      <div className={s.posts}>
        {postsElements}
        
        
      </div>
        
    </div>
  </div>  
  )}

export default MyPosts;


/*const MyPosts = (props) => {

  //debugger;
  let postsElements = props.posts.map( (p) => {
    return <Post message={p.message} likesCount={p.likesCount}/>
  });
  
  let newPostElement = React.createRef();

  let addPost = () =>  {
   let text = newPostElement.current.value;
   props.addPost();{/*с бизнес уров пришла ф-ция addPost через props *///}
   //props.updateNewPostText("");// для обнулении
  
  //}
/*
let onPostChange = () => {
  let text = newPostElement.current.value;
  props.updateNewPostText(text);
  //props.updateNewPostText(text); //text отправляется в бизнес setStatePost
}


  return <div className={s.postsBlock}>
    <h3>My post</h3>
    <div>
      <div>
      <textarea onChange = {onPostChange} ref={newPostElement} value = {props.newPostText}/> 
      {/*v 34 {props.newPostText} v 31 привязка ссылки к конкр. textarea*///}
     /* 
      </div>
      <div><button onClick={addPost}>Add post</button>
      </div>
      

      <div className={s.posts}>
        {postsElements}
        
        
      </div>
        
    </div>
  </div>  
}*/