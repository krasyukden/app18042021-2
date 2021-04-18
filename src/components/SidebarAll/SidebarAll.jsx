
import i from "./Sidebar/Sidebar.module.css"
//import Sidebar from "./Sidebar/Sidebar"// !!!
//import StoreContext from "../../StoreContext"
import { connect } from "react-redux"

/* ОТКЛЮЧЕН
let mapStateToProps = (state) => {
    //debugger

    return {
        //stateSidebar: state.sidebarAll.sidebarItem
        stateSidebar: state.sidebarAll.sidebarItem
    }
              
    
}*/ //!!!





/*const SidebarAll = () => {

    return (<StoreContext.Consumer>
        { (store) => {
            let state = store.getState();
            let sitebarElements = state.sidebarAll.sidebarItem.map( (s) => {  
                return <Sidebar friend={s.friend} id={s.id}/>
              })
            
            return (<div>
                <div className={`${i.sidebar}`}>Friends:</div>
                <div>{sitebarElements}</div>
            </div>)
            }
        }</StoreContext.Consumer>
    )
}*/




/*const SidebarAll = connect (mapStateToProps)(Sidebar); */  //!!!

//export default SidebarAll;