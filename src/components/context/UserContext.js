import React, { useState, createContext } from 'react'

export const UserContext = createContext();

export function UserProvider(props){

    const [loggedUser, setLoggedUser] = useState({
        userName: 'Teddy',
        email: 'example@gmail.com',
        isLoggedIn: false
    });

    return(
        <UserContext.Provider value={[loggedUser, setLoggedUser]}>
            {props.children}
        </UserContext.Provider>
    );
}