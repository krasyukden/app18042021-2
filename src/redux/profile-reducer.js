const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 }

      ],
      newPostText: '111'
};

const profileReducer = (state = initialState, action) => {//v 41

    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,//был параметр у ф-ции postMessage,
                likesCount: 0
            };

            // v 47
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
                       
            //this._callSubscriber(this._state);// не уведол подписчиков, т.к. един ответственн.
            
        case UPDATE_NEW_POST_TEXT:
            return {
            ...state, // v 47
            newPostText: action.newText,//у action будет текст//  пришло в state
            }// break не нужен , т.к. return
        default:
            return state;
    };
}

export const addPostActionCreator = () =>
    ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export default profileReducer;