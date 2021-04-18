import { NavLink } from "react-router-dom"
import s from "./../Dialogs.module.css"

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id; {/*v 23*/ }

    return (
        <div className={s.dialog + " " + s.active}><NavLink to={path}>{props.name}</NavLink></div>
    )
}



export default DialogsItem;