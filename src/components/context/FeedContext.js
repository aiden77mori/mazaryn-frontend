import React, { createContext, useState } from 'react';

export const FeedContext = createContext();

export function FeedProvider({children}){

    const [groups, setGroups] = useState([
        {
            profileImage: process.env.PUBLIC_URL + '/assets/images/profilePhoto.jpg',
            name: 'Name',
            newText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet varius ante. Quisque tortor sem, tempor bibendum justo vel, tristique blandit augue...'
        }, 
        {
            profileImage: process.env.PUBLIC_URL + '/assets/images/profilePhoto.jpg',
            name: 'Name',
            newText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet varius ante. Quisque tortor sem, tempor bibendum justo vel, tristique blandit augue...'
        }, 
        {
            profileImage: process.env.PUBLIC_URL + '/assets/images/profilePhoto.jpg',
            name: 'Name',
            newText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet varius ante. Quisque tortor sem, tempor bibendum justo vel, tristique blandit augue...'
        }, 
        {
            profileImage: process.env.PUBLIC_URL + '/assets/images/profilePhoto.jpg',
            name: 'Name',
            newText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet varius ante. Quisque tortor sem, tempor bibendum justo vel, tristique blandit augue...'
        }
    ]);

    return(
        <FeedContext.Provider value={[groups, setGroups]}>
            {children}
        </FeedContext.Provider>
    );
}