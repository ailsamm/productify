import React, { Component } from 'react';
import ProjectSidebar from '../ProjectsSidebar/ProjectsSidebar';
import ProjectifyContext from '../../ProductifyContext';
import './UserProfile.css';

export default class UserProfile extends Component {

    render(){
        return (
            <ProjectifyContext.Consumer>
                {context => {
                    console.log(context)
                    const userInfo = context.usersInfo.find(user => user.id === context.loggedInUser) || {};
                    const e = context.usersLogin.find(user => user.userId === context.loggedInUser) || {};
                    const email = e.emailAddress || "";
                    const team = context.teams.find(team => team.id === userInfo.teamId) || {};
                    const teamName = team.name || "";
                    return (
                        <div className="userProfile">
                            <ProjectSidebar/>
                            <div className="userProfile__main">  
                            <h3>name: {userInfo.firstName} {userInfo.lastName}</h3>
                            <h3>job title: {userInfo.jobTitle}</h3>
                            <h3>email: {email}</h3>
                            <h3>team: {teamName}</h3>
                            </div>
                        </div>
                    )
                }}
            </ProjectifyContext.Consumer>
        )
    }
}