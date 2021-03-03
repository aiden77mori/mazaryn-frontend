import React from 'react';
import './Profile.css';

function Profile(){

    return(
        <div className='profile'>
            <figure>
                <img src={process.env.PUBLIC_URL + '/assets/images/me.jpg'} alt='profileImage'/>
                <figcaption>
                    Teddy Mbugua
                </figcaption>    
            </figure>
        </div>
    );
}

export default Profile;