import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import AboutPage from '../AboutPage/AboutPage';
import SignUpPage from '../SignUpPage/SignUpPage.js';
import LogInPage from '../LogInPage/LogInPage.js';
import TaskPage from '../TaskPage/TaskPage';
import AddNewTask from '../AddNewTask/AddNewTask';
import UserProfile from '../UserProfile/UserProfile';
import ProjectsPage from '../ProjectsPage/ProjectsPage.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ProductifyContext from '../../ProductifyContext';
import ErrorPage from '../ErrorPage/ErrorPage';
import './MainContentRouter.css'
export default class MainContentRouter extends Component {

    static contextType = ProductifyContext;
    render(){
        return (
            <main className="mainContent">
                <Switch>
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
                        key='unauthorized'
                        path='/unauthorized' 
                        render={() => <ErrorPage error={{code: "403", message:"Access forbidden"}}/>}
                    />
                    <ProtectedRoute  
                        exact 
                        key='addNewTask'
                        path='/newTask' 
                        loggedInUser={this.context.loggedInUser} 
                        component={AddNewTask}
                    />
                    <ProtectedRoute 
                        exact 
                        key="projects"
                        path='/projects' 
                        loggedInUser={this.context.loggedInUser} 
                        component={ProjectsPage} 
                    />               
                    <ProtectedRoute 
                        key='taskPage'
                        path='/projects/:taskId' 
                        loggedInUser={this.context.loggedInUser} 
                        component={TaskPage}
                    />
                    <ProtectedRoute 
                        exact
                        key='profile'
                        path='/profile' 
                        loggedInUser={this.context.loggedInUser} 
                        component={UserProfile}
                    />
                    <Route
                        key="notFound"
                        render={() => <ErrorPage error={{code: "404", message:"Page not found"}}/>}
                    />
                </Switch>
            </main>
        )
    }
}