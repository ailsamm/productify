import React, { Component } from 'react';
import TeamMember from '../TeamMember/TeamMember';
import Project from '../Project/Project';
import ProductifyContext from '../../ProductifyContext';
import './ProjectsSidebar.css';

export default class ProjectsSidebar extends Component {

    static contextType = ProductifyContext;

    getMembers(){
        const members = this.context.members || [];
        return members.map(teamMember => <TeamMember key={teamMember.name} member={teamMember}></TeamMember>);
    }

    getProjects(){
        const projects = this.context.projects || [];
        return projects.map(project => {
            let className= ""
            if (this.props.currentProject === project.id){
                console.log("i'm a match!", project.id)
                className = " selectedProject"
            }
            return <Project className={className} updateCurrentProject={this.props.updateCurrentProject} key={project.id} project={project}></Project>})
    }

    render() {
        return (
            <div className="projects__sidebar projects__column">
                <h2>Team name</h2>
                <h3>Projects:</h3>
                <div className="projects__sidebar__members">
                    {this.getProjects()}
                </div>
                <h3>Members:</h3>
                <div className="projects__sidebar__members">
                    {this.getMembers()}
                </div>
            </div>
        )
    }
}