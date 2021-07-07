import React, { createContext } from 'react'

export const UserContext = createContext();

export const UserProvider = props => {
    return(
        <UserContext.Provider value={'hello'}>
            {props.children}
        </UserContext.Provider>
    );
}