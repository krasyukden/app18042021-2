/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
//import {addPost} from "./redux/state";{/*т.к. экс не по дефолту */
//import {rerenderEntireTree} from "./render";
//import  { Provider } from "./StoreContext"


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import state from "./redux/state";
//import {addPost} from "./redux/state"; 
//import {state} from "./redux/state";
//import {updateNewPostText} from "./redux/state"
//import {updateNewMessageText} from "./redux/state"
//import {addMessage} from "./redux/state";
//import {subscribe} from "./redux/state";
import store from "./redux/redux-store";
import { Provider } from 'react-redux';




  ReactDOM.render(
    <React.StrictMode>
      <Provider store = {store}> {/*v 44 контекст */}
        <App 
        /*state={state}
          dispatch={store.dispatch.bind(store)}
          //не вызываем, а отдаем дальше// 
          store={store}
        //потеря контекста вызов не от store а прокидываем чз props
        //bind связывает (делает копию ф-ции) с владельцем метода - store*/
        />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )

//rerenderEntireTree(store.getState());



/*store.subscribe(() => {
  let state = store.getState();//getState - м-д redux
  rerenderEntireTree(state);
});*/ // redux не уведом подписчиков, обернуть ананимной ф-цией v. 42


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/*

let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value = {store}>
        <App state={state}
          dispatch={store.dispatch.bind(store)}
          //не вызываем, а отдаем дальше// 
          store={store}
        //потеря контекста вызов не от store а прокидываем чз props
        //bind связывает (делает копию ф-ции) с владельцем метода - store
        />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
};
rerenderEntireTree(store.getState());






ReactDOM.render(
  <React.StrictMode>
    <App state = {store.getState}{/*state={state}
    addPost={addPost}
    updateNewPostText = {updateNewPostText}
updateNewMessageText={updateNewMessageText}
    addMessage={addMessage}/>
  </React.StrictMode>,
  document.getElementById('root')
)*/
// updateNewPostText = {store.updateNewPostText.bind(store)} 
//   updateNewMessageText={store.updateNewMessageText.bind(store)}
//       addMessage={store.addMessage.bind(store)}/>