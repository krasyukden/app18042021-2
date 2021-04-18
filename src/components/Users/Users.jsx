import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";


let Users = (props) => {
    //debugger;
    if (props.users.lenght === 0) { // НЕ ПРИХОДЯТ В PROPS !!!
        
   /* axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        //debugger;
        props.setUsers();
    });*/
    props.setUsers([
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
        ])
    };

    return (<div>
        {props.users.map(u => {
            return <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>
        })
        }

    </div>)
}

export default Users;


