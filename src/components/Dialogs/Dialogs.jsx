import { NavLink } from "react-router-dom"
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";
import React from 'react';
//import { sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

  /*данные с сервера */
let state = props.dialogsPage;// сразу получаем dialogsPage

  let dialogsElements = state.dialogs.map((d) => {
    return <DialogsItem name={d.name} key={d.id} id={d.id} />
  })

  let messagesElements = state.messages.map((m) => {
    return <Message message={m.message} key={m.id} />
  });

  let newMessageBody = state.newMessageBody;  //приходит из store 
   
  

  let onNewMessageChange = (e) => {

    let body = e.target.value;//из textarea берем value , e - событие
    props.updateNewMessageBody(body);//вызов callback, к-рый пришел
    //props.store.dispatch(updateNewMessageBodyCreator(body));//отправить в бизнес body,
    //вызывается, чтобы создать action и вернуть с помощью return 
    //props.store.newMessageBody = "";  // !!! не раб ???
    /*let text = linkTextMessage.current.value;
    let action = updateNewMessageTextActionCreator(text);
    //let action = {type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: text};
    props.dispatch(action);//text отправляется в бизнес*/
    
  }

  //let linkTextMessage = React.createRef();

  let onSendMessageClick = () => {
    props.sendMessage();
    
    //props.store.dispatch(sendMessageCreator());
       
    /*let textMessage  = linkTextMessage.current.value;
    props.dispatch(addMessageActionCreator());/*с бизнес уров пришла ф-ция addMessage через props */
    //linkTextMessage.current.value = "";
    
    //alert(textMessage); 
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}

        {/* <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />*/}
      </div>

      <div className={s.messages}>
        <div>{messagesElements}</div>
           <div>
             <textarea 
           value={newMessageBody} 
           onChange={onNewMessageChange} 
           placeholder="Enter your message"></textarea></div> 
           <div><button onClick={onSendMessageClick}>Send</button> </div>       

      </div>
      {/*<div className={s.addMessages}>
      <div><input ref={linkTextMessage} value = {props.newMessageText} onChange={onMessageChange}/></div>
      <div><button onClick={addMessage} >Add Message</button></div>
              </div>*/}
    </div>
  )
}

export default Dialogs;