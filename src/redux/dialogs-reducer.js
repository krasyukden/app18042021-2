const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = { 
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
};

const dialogsReducer = (state = initialState, action) => {
    
    //let stateCopy = {...state, messages: [...state.messages]};// v 48 копия для обрисовки, 
        
    switch (action.type) {// v  48
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return{
                ...state,
                newMessageBody: " ",
                messages: [...state.messages, { id: 6, message: body }] //...  добавил в массив вместо  push   
            };
           
            //stateCopy.newMessageBody = " ";
            //stateCopy.messages.push({ id: 6, message: body });
            
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body //  аналог stateCopy.newMessageBody = action.body;
            }
            
            
        default:
            return state;//  ничего не менять
    };
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
// обернцли в () для того, чтобы показать, что это не тело ф-ции, а объект


export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
};

export default dialogsReducer;