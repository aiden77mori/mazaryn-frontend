import React from 'react';
import './view.css';
import { Switch } from 'react-router-dom';
import Header from '../components/header/Header';
import LeftPane from '../components/left pane/LeftPane';
import RightPane from '../components/right pane/RightPane.js';
import Posts from '../components/middle pane/post/Posts';
import Profile from '../components/middle pane/profile/Profile';
import Feed from '../components/middle pane/feed/Feed';
import PrivateRoute from '../guards/ProtectedRoutes';

function View({logout}){
    return(
        <div id='view'>
            <Header />
            <div className='section'>
                <LeftPane />
                <section id='middle' className='bg-faintgreen min-w-min'>
                        <Switch>
                            <PrivateRoute exact path='/' component={Feed}/>
                            <PrivateRoute exact path='/profile' component={Profile} />
                            <PrivateRoute exact path='/group' component={Posts}/>
                            <PrivateRoute exact path='/notifications' component={FutureUpdate} />
                            <PrivateRoute exact path='/wallet' component={FutureUpdate} />
                        </Switch>
                </section>
                <RightPane logout={logout}/>
            </div>
        </div>
    )
}

function FutureUpdate(){
    return(
        <h3>Yet to come</h3>
    );
}


export default View

