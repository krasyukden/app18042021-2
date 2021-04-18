import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";



let reducers = combineReducers ({

    profilePage: profileReducer,// вопринимать как часть state
    dialogsPage: dialogsReducer,
    sidebarAll: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);//v 42

 //window.store = store;

export default store;