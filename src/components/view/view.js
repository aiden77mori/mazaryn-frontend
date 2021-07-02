import React from 'react';
import './view.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import LeftPane from '../left pane/LeftPane';
import RightPane from '../right pane/RightPane.js';
import Posts from '../middle pane/post/Posts';
import Profile from '../middle pane/profile/Profile';

function View({logout}){
    return(
        <div id='view'>
            <Header />
            <div className='section'>
                <LeftPane />
                <section id='middle'>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Posts}/>
                            <Route path='/profile' component={Profile} />
                        </Switch>
                    </Router>
                </section>
                <RightPane logout={logout}/>
            </div>
        </div>
    )
}

export default View