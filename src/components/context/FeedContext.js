import React, { createContext, useState } from 'react';

export const FeedContext = createContext();

export function FeedProvider({children}){

    const [groups, setGroups] = useState([
        {
            profileImage: process.env.PUBLIC_URL + '/assets/images/profilePhoto.jpg',
            name: 'Name',
            newText: 'lorem ipsum'
        }, 
        {
            profileImage: process.env.PUBLIC_URL + '/assets/images/profilePhoto.jpg',
            name: 'Name',
            newText: 'lorem ipsum'
        }
    ]);

    return(
        <FeedContext.Provider value={[groups, setGroups]}>
            {children}
        </FeedContext.Provider>
    );
}