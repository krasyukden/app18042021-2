
import Post from "./Post/Post"
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
//import StoreContext from "../../../StoreContext";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  
  

  return {
    addPost: () => {dispatch(addPostActionCreator())},

    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch (action)}
  }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


/*const MyPostsContainer = (props) => {
//debugger;
  //let state = props.store.getState();

  return (
    <StoreContext.Consumer>
      {
      (store) => { //v 44

        let state = store.getState();
        let addPost = () =>  {
   
          store.dispatch(addPostActionCreator());
          
         
         };
       
       let onPostChange = (text) => { //text принимает как парампетр
         //let text = newPostElement.current.value;
         //let action = {type: "UPDATE-NEW-POST-TEXT" , newText: text}
         let action = updateNewPostTextActionCreator(text);
         store.dispatch (action);
         //props.updateNewPostText(text); //text отправляется в бизнес setStatePost
       };

        return <MyPosts
          addPost={addPost}
          updateNewPostText={onPostChange}
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText} />
      }
    }
    </StoreContext.Consumer>
    //onPostChange  передали дальше в презентац компон; props.posts передали чз props  в презен комп
  )
}*/




/*const MyPostsContainer = (props) => {

  
  let addPost = () =>  {
   //let text = newPostElement.current.value;
   props.dispatch(addPostActionCreator());
   //props.dispatch({type: 'ADD-POST'});{/*с бизнес уров пришла ф-ция addPost через props }
   //props.updateNewPostText("");// для обнулении
  
  }

let onPostChange = (text) => { //text принимает как парампетр
  //let text = newPostElement.current.value;
  //let action = {type: "UPDATE-NEW-POST-TEXT" , newText: text}
  let action = updateNewPostTextActionCreator(text);
  props.dispatch (action);
  //props.updateNewPostText(text); //text отправляется в бизнес setStatePost
}



  return (
  <MyPosts addPost = {addPost} updateNewPostText = {onPostChange} posts = {props.posts}/>
  //onPostChange  передали дальше в презентац компон; props.posts передали чз props  в презен комп
  )
}


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