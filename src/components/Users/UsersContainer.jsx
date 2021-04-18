import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";




let mapStateToProps = (state) => {
    //debugger;
    return {
        users: state.usersPage.users
    }

}

let mapDispatchToProps = (dispatch) => {
    
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC (userId));
        },
        setUsers: (users) => {
             dispatch(setUsersAC(users));   
        }

    }
}



 const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users);

 export default UsersContainer;