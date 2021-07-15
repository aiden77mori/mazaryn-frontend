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
                <Router>
                    <section id='middle'>
                        <FeedProvider>
                            <Switch>
                                <Route exact path='/' component={Feed}/>
                                <Route path='/profile' component={Profile} />
                                <Route path='/group' component={Posts}/>
                            </Switch>
                        </FeedProvider>
                    </section>
                    <RightPane logout={logout}/>
                </Router>
            </div>
        </div>
    )
}

export default View