import React from 'react';
import './view.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import LeftPane from '../components/left pane/LeftPane';
import RightPane from '../components/right pane/RightPane.js';
import Posts from '../components/middle pane/post/Posts';
import Profile from '../components/middle pane/profile/Profile';
import Feed from '../components/middle pane/feed/Feed';

function View({logout}){

    return(
        <div id='view'>
            <Header />
            <div className='section'>
                <LeftPane />
                <section id='middle' className='bg-faintgreen min-w-min'>
                        <Switch>
                            <Route exact path='/' component={Feed}/>
                            <Route exact path='/profile' component={Profile} />
                            <Route exact path='/group' component={Posts}/>
                            <Route exact path='/notifications' component={FutureUpdate} />
                            <Route exact path='/wallet' component={FutureUpdate} />
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

