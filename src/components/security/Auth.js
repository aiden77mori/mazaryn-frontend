import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

function Auth(){

    const [loggedUser, setLoggedUser] = useContext(UserContext);

    return(
        <div>
            {loggedUser.userName}
        </div>
    );
}

export default Auth;