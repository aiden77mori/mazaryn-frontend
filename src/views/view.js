import React from 'react';
import './view.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import LeftPane from '../components/left pane/LeftPane';
import RightPane from '../components/right pane/RightPane.js';
import Posts from '../components/middle pane/post/Posts';
import Profile from '../components/middle pane/profile/Profile';
import Feed from '../components/middle pane/feed/Feed';
import { FeedProvider } from '../components/context/FeedContext';

function View({logout}){
    return(
        <div id='view'>
            <Header />
            <div className='section'>
                <LeftPane />
                <section id='middle' className='bg-faintgreen min-w-min'>
                    <FeedProvider>
                        <Switch>
                            <Route exact path='/' component={Feed}/>
                            <Route path='/profile' component={Profile} />
                            <Route path='/group' component={Posts}/>
                            <Route path='/notifications' component={FutureUpdate} />
                            <Route path='/wallet' component={FutureUpdate} />
                        </Switch>
                    </FeedProvider>
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

