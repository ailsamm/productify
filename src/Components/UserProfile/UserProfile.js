import React, { Component } from 'react';
import ProjectSidebar from '../ProjectsSidebar/ProjectsSidebar';
import ProjectifyContext from '../../ProductifyContext';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import './UserProfile.css';

export default class UserProfile extends Component {

    handleClickName = () => {
        console.log("name")
    }

    handleClickEmail = () => {
        console.log("email")
    }

    handleClickJob = () => {
        console.log("job")
    }

    render(){
        return (
            <ProjectifyContext.Consumer>
                {context => {
                    const userInfo = context.usersInfo.find(user => user.id === context.loggedInUser) || {};
                    const userLogInInfo = context.usersLogin.find(user => user.userId === context.loggedInUser) || {};
                    const email = userLogInInfo.emailAddress || "";
                    const team = context.teams.find(team => team.id === userInfo.teamId) || {};
                    const teamName = team.name || "";
                    return (
                        <div className="userProfile">
                            <ProjectSidebar/>
                            <div className="userProfile__main">  
                                <div className="userProfile__userInfo">
                                    <h2 className="userProfile__title">my profile</h2>
                                    <h3><span className="userProfile__key">first name:</span> {userInfo.firstName} <FontAwesomeIcon onClick={this.handleClickFirstName} className="userProfile__icon" icon={faEdit}/></h3>
                                    <h3><span className="userProfile__key">last name:</span> {userInfo.lastName} <FontAwesomeIcon onClick={this.handleClickLastName} className="userProfile__icon" icon={faEdit}/></h3>
                                    <h3><span className="userProfile__key">job title:</span> {userInfo.jobTitle} <FontAwesomeIcon onClick={this.handleClickJob} className="userProfile__icon" icon={faEdit}/></h3>
                                    <h3><span className="userProfile__key">email:</span>  {email} <FontAwesomeIcon onClick={this.handleClickEmail} className="userProfile__icon" icon={faEdit}/></h3>
                                    <h3><span className="userProfile__key">team:</span>  {teamName}</h3>
                                    <h3><span className="userProfile__key">profile status:</span> active <FontAwesomeIcon className="userProfile__icon" id="userProfile__check" icon={faCheck}/></h3>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProjectifyContext.Consumer>
        )
    }
}