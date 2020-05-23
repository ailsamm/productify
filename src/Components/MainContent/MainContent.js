import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import AboutPage from '../AboutPage/AboutPage';
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
                <Route 
                    exact 
                    key='/about'
                    path='/about' 
                    component={AboutPage}
                />
            </div>
        )
    }
}