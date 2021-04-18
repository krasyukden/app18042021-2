import { NavLink } from "react-router-dom"
import s from "./Sidebar.module.css"


const Sidebar = (props) => {

    //debugger;

let sitebarElements = props.stateSidebar.sidebarAll.sidebarItem.map( (s) => {  
    return <Sidebar friend={s.friend} id={s.id} />
  })
  
  return (<div>
    <div >Friends:</div>
    <div>{sitebarElements}</div>
</div>)
/*return (
        <div>
         
            <div className={`${s.sidebar}`}>{props.friend}</div>
          
        
        </div>
    )*/
}


/*const Sidebar = (props) => {
    {/*let path = "/dialogs/" + props.id; {/*v 23*///} 

    /*return (
        <div>
         
            <div className={`${s.sidebar}`}>{props.friend}</div>
          
        
        </div>
    )
}*/



//export default Sidebar;