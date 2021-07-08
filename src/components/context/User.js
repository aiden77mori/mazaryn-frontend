import React, { useContext } from 'react'
import { UserContext } from './UserContext';

function User(){

    const [loggedUser, setLoggedUser] = useContext(UserContext);

    return(
        <div>
            {loggedUser.userName}
        </div>
    );
}

export default User;