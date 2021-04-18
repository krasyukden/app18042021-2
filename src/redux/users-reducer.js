import * as axios from "axios";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";



let initialState = {
    users: []
    
    /*
    users: [
        {
            id: 1, photoUrl: "https://instagramer.info/wp-content/cache/thumb/a5/c810900880deca5_320x200.jpg",
            followed: false, fullName: 'Denis', status: 'I am happy', location: { city: 'Kharkiv', country: 'Ukraine' }
        },
        {
            id: 2, photoUrl: "https://instagramer.info/wp-content/cache/thumb/a5/c810900880deca5_320x200.jpg",
            followed: true, fullName: 'Max', status: 'I like cycling', location: { city: 'Kiev', country: 'Ukraine' }
        },
        {
            id: 3, photoUrl: "https://instagramer.info/wp-content/cache/thumb/a5/c810900880deca5_320x200.jpg",
            followed: true, fullName: 'Kipi', status: 'I am beautiful', location: { city: 'London', country: 'UK' }
        }
    ]*/
      
};

const usersReducer = (state = initialState, action) => {//v 41

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: [...state.users],//аналог map
                users: state.users.map ( u => {// v 49
                 if(u.id === action.userId){
                    return {...u, followed: true};
                }
                  return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                //users: [...state.users],//аналог map
                users: state.users.map ( u => {// v 49
                 if(u.id === action.userId){
                    return {...u, followed: false}
                };
                  return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users:[...state.users, ...action.users]//копия массива ...state.users + дописать массив ...action.users

            }
        default:
            return state;
    };
}

export const followAC = (userId) =>
    ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
};
export const setUsersAC = (users)  => {// users с сервера
    //debugger;
    return {
        type: SET_USERS, 
        users
    }
}


export default usersReducer;