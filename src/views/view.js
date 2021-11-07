import React from 'react';
import './view.css';
import Header from '../components/header/Header';
import LeftPane from '../components/left pane/LeftPane';
import RightPane from '../components/right pane/RightPane.js';
import Posts from '../components/middle pane/post/Posts';
import Profile from '../components/middle pane/profile/Profile';
import Feed from '../components/middle pane/feed/Feed';
import PrivateRoute from '../guards/ProtectedRoutes';

function View(props) {
    return (
        <div id='view'>
            <Header />
            <div className='section'>
                <LeftPane />
                <section id='middle' className='bg-faintgreen min-w-min'>
                    <PrivateRoute exact path='/' component={Feed} />
                    <PrivateRoute exact path='/profile' component={Profile} />
                    <PrivateRoute exact path='/group' component={Posts} />
                    <PrivateRoute exact path='/notifications' component={FutureUpdate} />
                    <PrivateRoute exact path='/wallet' component={FutureUpdate} />
                </section>
                <RightPane history={props.history} />
            </div>
        </div>
    )
}

function FutureUpdate() {
    return (
        <h3>Yet to come</h3>
    );
}


export default View

