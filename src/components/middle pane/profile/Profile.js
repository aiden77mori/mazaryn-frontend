import React from 'react';
import './Profile.css';


function Profile(){
    return(
        <div className='profile'>
            <figure className='profileIdentity'>
                <img src={process.env.PUBLIC_URL + '/images/me.jpg'} alt=''/>
                <figcaption><h4>Teddy Mbugua</h4></figcaption>
            </figure>
        </div>
    );
}

export default Profile;