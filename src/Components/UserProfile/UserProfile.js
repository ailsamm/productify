import React, { Component } from 'react';
import ProjectSidebar from '../ProjectsSidebar/ProjectsSidebar';
import ProjectifyContext from '../../ProductifyContext';
import './UserProfile.css';

export default class UserProfile extends Component {

    render(){
        return (
            <ProjectifyContext>
                {value => {
                    const user = value.loggedInUser;
                    return (
                        <div className="userProfile">
                            <ProjectSidebar/>
                            <div className="userProfile__main">  
                            <h3>{user.firstName}</h3>
                            </div>
                        </div>
                    )
                }}
            </ProjectifyContext>
        )
    }
}