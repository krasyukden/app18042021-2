import { NavLink } from "react-router-dom"
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";
import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
//import StoreContext from "../../StoreContext";
import { connect } from "react-redux";


let mapStateToProps = (state) => {// замапить state на props
  return {
    dialogsPage: state.dialogsPage
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));//отправить в бизнес body,
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());// диспатчем actioncreator - возврат action - nbg
    }
  }
};

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);//v 45  f connect вызвола ф-цию к-рая создает Dialogs 

export default DialogsContainer;


/*const DialogsContainer = () => {

  /*данные с сервера */


  /*return <StoreContext.Consumer> 
    { (store) => {// v 44
      let state = store.getState().dialogsPage;

    /* let dialogsElements = state.dialogs.map((d) => {
       return <DialogsItem name={d.name} id={d.id} />
     })

     let messagesElements = state.messages.map((m) => {
       return <Message message={m.message} />
     });*/

     //let newMessageBody = props.store.newMessageBody;  //приходит из store


/*
     let onNewMessageChange = (body) => {

      //let body = e.target.value;//из textarea берем value , e - событие
      store.dispatch(updateNewMessageBodyCreator(body));//отправить в бизнес body,
       //вызывается, чтобы создать action и вернуть с помощью return
       //props.store.newMessageBody = "";  // !!! не раб ???
       /*let text = linkTextMessage.current.value;
       let action = updateNewMessageTextActionCreator(text);
       //let action = {type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: text};
       props.dispatch(action);//text отправляется в бизнес*/

     //}

     //let linkTextMessage = React.createRef();
/*
     let onSendMessageClick = () => {
      store.dispatch(sendMessageCreator());// диспатчем actioncreator - возврат action - nbg

       /*let textMessage  = linkTextMessage.current.value;
       props.dispatch(addMessageActionCreator());/*с бизнес уров пришла ф-ция addMessage через props */
       //linkTextMessage.current.value = "";

       //alert(textMessage);
     //}
  /* return <Dialogs updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick} dialogsPage={state} />}
}
  </StoreContext.Consumer>//state -локальн.
}*/

