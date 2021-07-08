import React, { useState, createContext } from 'react'

export const UserContext = createContext();

export function UserProvider(props){

    const [loggedUser, setLoggedUser] = useState({
        userName: '',
        email: '',
        isLoggedIn: false
    });

    return(
        <UserContext.Provider value={[loggedUser, setLoggedUser]}>
            {props.children}
        </UserContext.Provider>
    );
}