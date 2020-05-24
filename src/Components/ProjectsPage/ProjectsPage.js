import React, { Component } from 'react';
import './ProjectsPage.css';

export default class ProjectsPage extends Component {
    
    render() {
        const teamName = "< Team Name >"
        return (
            <div className="projects">
                <div className="projects__navbar projects__column">
                    <h2>{teamName}</h2>
                    <h3>Members:</h3>
                    <ul>
                        <li>Ada</li>
                        <li>Joe</li>
                        <li>Caroline</li>
                        <li>Blake</li>
                        <li>Julia</li>
                    </ul>
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