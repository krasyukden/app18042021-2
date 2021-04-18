import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Post from "./MyPosts/Post/Post";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

  //debugger;



  return <div>
     <ProfileInfo />
    
    
      <MyPostsContainer /*store ={props.store}*/ />
      
      
    
  </div>;
}

export default Profile;


/*const Profile = (props) => {

  //debugger;



  return <div>
     <ProfileInfo />
    
    
      <MyPosts posts={props.profilePage.posts} 
      newPostText ={props.profilePage.newPostText}
      dispatch={props.dispatch}
      
      //updateNewPostText={props.updateNewPostText}
      /> {/*через props передаем }
      
    
  </div>;
}*/