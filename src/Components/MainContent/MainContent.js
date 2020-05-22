import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import './MainContent.css'

export default class MainContent extends Component {
    render(){
        return (
            <div className="mainContent">
                <Route 
                    exact 
                    key='/'
                    path='/' 
                    component={LandingPage}
                />
            </div>
        )
    }
}