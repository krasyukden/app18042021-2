import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

// ОТКЛЮЧЕН


let store = {

  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 }

      ],
      newPostText: '111'
    },

    dialogsPage: {

      dialogs: [
        { id: 1, name: "Den" },
        { id: 2, name: "Dima" },
        { id: 3, name: "Max" },
        { id: 4, name: "Valera" },
        { id: 5, name: "Andrey" }
      ],


      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are your" },
        { id: 3, message: "Yo" }
      ],

      newMessageBody: ""
    },


    sidebarAll: {
      sidebarItem: [
        { id: 1, friend: "Andrew" },
        { id: 2, friend: "Max" },
        { id: 3, friend: "Dima" }
      ]
    },
  },


  getState() {
    //debugger;
    return this._state;
  },

  _callSubscriber() {
    console.log(123); // rerenderEntireTree ссылается не на консоль, а на observer

  },

  

  dispatch(action) {//action -это объект, dispatch- на анг - отправить
   
    this._state.profilePage = profileReducer (this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
    this._state.sidebarAll = sidebarReducer (this._state.sidebarAll, action);
   
      this._callSubscriber(this._state);// уведом подписчиков
          
  },
  subscribe(observer) { // уведомить подписчика, в store что то измен.

    this._callSubscriber = observer;// паттерн, без писать let т.к. ф-ция выпригивает и ищет из замыкания rerenderEntireTree
  }
 
  
}



//export let state = store.getState();

export default store;






/*let rerenderEntireTree = () => {
  console.log(123); // rerenderEntireTree ссылается не на консоль, а на observer
}

let state = {
  profilePage: {
    posts: [
    { id: 1, message:"Hi, how are you?", likesCount: 12},
    { id: 2, message:"It's my first post", likesCount: 11}

  ],
  newPostText: '111'
},

  dialogsPage:{

  dialogs: [
    { id: 1, name:"Den"},
    { id: 2, name:"Dima"},
    { id: 3, name:"Max"},
    { id: 4, name:"Valera"},
    { id: 5, name:"Andrey"}
  ],


  messages: [
    { id: 1, message:"Hi"},
    { id: 2, message:"How are your"},
    { id: 3, message:"Yo"}
  ],

  newMessageText: "qwe"
  },


  sidebarAll: {
    sidebarItem: [
    {id: 1, friend: "Andrew"},
    {id: 2, friend: "Max"},
    {id: 3, friend: "Dima"}
    ]}

}
window.state = state;

export const subscribe = (observer) => {  v 35
  rerenderEntireTree = observer;// паттерн, без писать let т.к. ф-ция выпригивает и ищет из замыкания rerenderEntireTree
}

export const updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  rerenderEntireTree (state);
}

export const addMessage = () => {
  let newMessage = {
    id: 4,
    message: state.dialogsPage.newMessageText
  }
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree (state);
}





export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;// пришло в state

  rerenderEntireTree (state);
}


export const addPost = () => {

   let newPost = {
    id: 5,
    message:  state.profilePage.newPostText,//был параметр у ф-ции postMessage,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree (state);
}
addPost () {

  //debugger;

  let newPost = {
   id: 5,
   message:  this._state.profilePage.newPostText,//был параметр у ф-ции postMessage,
   likesCount: 0
 }

 this._state.profilePage.posts.push(newPost);
 this._state.profilePage.newPostText = "";
 this._callSubscriber  (this._state);
},
addMessage () {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessageText
    }
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber (this._state);
  },
   updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;// пришло в state

    this._callSubscriber (this._state);
  },
  updateNewMessageText (newMessage) {
    this._state.dialogsPage.newMessageText = newMessage;
    this._callSubscriber (this._state);
  }*/
/*
  dispatch(action) {//action -это объект, dispatch- на анг - отправить
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,//был параметр у ф-ции postMessage,
        likesCount: 0
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);


    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;//у action будет текст//  пришло в state
      this._callSubscriber(this._state);
    
    } /*else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 4,
        message: this._state.dialogsPage.newMessageText
      }
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    
    }
    else if (action.type === "SEND-MESSAGE"){
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = " ";// не стирает ???
      this._state.dialogsPage.messages.push({id: 6, message: body});
      this._callSubscriber(this._state);
      
    }
    else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
      
    }
  }*/