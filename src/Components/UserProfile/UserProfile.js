import React, { Component } from 'react';
import ProjectSidebar from '../ProjectsSidebar/ProjectsSidebar';
import ProjectifyContext from '../../ProductifyContext';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './UserProfile.css';

export default class UserProfile extends Component {

    handleGoBack = () => {
        this.props.history.push("/projects");
    }

    render(){
        return (
            <ProjectifyContext.Consumer>
                {context => {
                    const userInfo = context.usersInfo.find(user => user.id === context.loggedInUser) || {};
                    const userLogInInfo = context.usersLogin.find(user => user.user_id === context.loggedInUser) || {};
                    const email = userLogInInfo.email_address || "";
                    const team = context.teams.find(team => team.id === userInfo.team_id) || {};
                    const teamName = team.team_name || "";
                    return (
                        <div className="userProfile">
                            <ProjectSidebar showButton={false} displayProjectInfo={false}/>
                            <div className="userProfile__main">  
                                <div className="userProfile__userInfo">
                                    <h2 className="userProfile__title">my profile</h2>
                                    <h3><span className="userProfile__key">first name:</span> {userInfo.first_name}</h3>
                                    <h3><span className="userProfile__key">last name:</span> {userInfo.last_name}</h3>
                                    <h3><span className="userProfile__key">job title:</span> {userInfo.job_title}</h3>
                                    <h3><span className="userProfile__key">email:</span>  {email}</h3>
                                    <h3><span className="userProfile__key">team:</span>  {teamName}</h3>
                                    <h3><span className="userProfile__key">profile status:</span> active <FontAwesomeIcon id="userProfile__check" icon={faCheck}/></h3>
                                </div>
                                <div className="userProfile__buttons">
                                    <button type="button" onClick={this.handleGoBack} className="button stopButton">back</button>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProjectifyContext.Consumer>
        )
    }
}