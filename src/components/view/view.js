import React from 'react';
import './view.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import LeftPane from '../left pane/LeftPane';
import RightPane from '../right pane/RightPane.js';
import Posts from '../middle pane/post/Posts';
import Profile from '../middle pane/profile/Profile';
import Feed from '../middle pane/feed/Feed';
import { FeedProvider } from '../context/FeedContext';

function View({logout}){
    return(
        <div id='view'>
            <Header />
            <div className='section'>
                <LeftPane />
                <section id='middle'>
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

