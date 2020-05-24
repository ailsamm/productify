import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import AboutPage from '../AboutPage/AboutPage';
import SignUpPage from '../SignUpPage/SignUpPage.js';
import LogInPage from '../LogInPage/LogInPage.js';
import ProjectsPage from '../ProjectsPage/ProjectsPage.js';
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
                <Route 
                    exact 
                    key='/signup'
                    path='/signup' 
                    component={SignUpPage}
                />
                <Route 
                    exact 
                    key='/login'
                    path='/login' 
                    component={LogInPage}
                />
                <Route 
                    exact 
                    key='/projects'
                    path='/projects' 
                    component={ProjectsPage}
                />
            </div>
        )
    }
}