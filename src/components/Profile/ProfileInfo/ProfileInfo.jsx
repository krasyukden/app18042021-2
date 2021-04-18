
import s from "./ProfileInfo.module.css"


const ProfileInfo = () => {
  return <div>
     
    <div><img className={s.img} src="https://images.saatchiart.com/saatchi/1025803/art/4042108/3111961-GYOMWKMY-7.jpg"></img></div>
    <div className={s.descriptionBlock}>ava + description</div>
    
  </div>;
}

export default ProfileInfo;