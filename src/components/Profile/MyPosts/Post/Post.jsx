import s from "./Post.module.css"

const Post = (props) => {
  return (  
     //debugger;
      
        <div className={s.item}>
          <img src="https://download-cs.net/steam/avatars/3412.jpg"/>
          {props.message}
          <div><span>like: {props.likesCount}</span></div>
          </div>
        
      )
    
    
}

export default Post;