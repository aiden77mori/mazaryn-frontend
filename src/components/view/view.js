import React from 'react';
import './view.css';
import Header from '../header/Header';
import LeftPane from '../left pane/LeftPane';
import RightPane from '../right pane/RightPane.js';

function view(){
    return(
        <div id='view'>
            <Header />
            <div className='section'>
                <LeftPane />
                <section id='middle'>
                    middle section
                </section>
                <RightPane />
            </div>
        </div>
    )
}

export default view