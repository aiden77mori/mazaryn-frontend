import React from 'react';
import './view.css';
import Header from '../header/Header';
import LeftPane from '../left pane/LeftPane';

function view(){
    return(
        <div id='view'>
            <Header />
            <LeftPane />
        </div>
    )
}

export default view