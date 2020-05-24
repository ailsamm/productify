import React, { Component } from 'react';
import TeamMember from '../TeamMember/TeamMember';
import './ProjectsPage.css';

export default class ProjectsPage extends Component {
    
    render() {
        const teamName = "< Team Name >"
        const members = [
            {name:'Ada', jobTitle:'UI designer'},
            {name:'Joe', jobTitle:'Business lead'},
            {name:'Caroline', jobTitle:'Project manager'},
            {name:'Blake', jobTitle:'Backend developer'},
            {name:'Julia', jobTitle:'Frontend developer'}
        ]
        return (
            <div className="projects">
                <div className="projects__navbar projects__column">
                    <h2>{teamName}</h2>
                    <h3>Members:</h3>
                    <div className="projects__navbar__members">
                        {members.map(teamMember => <TeamMember member={teamMember}></TeamMember>)}
                    </div>
                </div>
                <div className="projects__tasksBacklog projects__column">
                    <h2>Backlog</h2>
                </div>
                <div className="projects__tasksInProgress projects__column">
                    <h2>In progress</h2>
                </div>
                <div className="projects__tasksInReview projects__column">
                    <h2>In review</h2>
                </div>
                <div className="projects__tasksComplete projects__column">
                    <h2>Complete</h2>
                </div>
            </div>
        )
    }
}