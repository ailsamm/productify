import React, { Component } from 'react';
import TeamMember from '../TeamMember/TeamMember';
import ProductifyContext from '../../ProductifyContext';
import './ProjectsSidebar.css';

export default class ProjectsSidebar extends Component {

    static contextType = ProductifyContext;

    getMembers(){
        const members = this.context.members || []
        return members.map(teamMember => <TeamMember key={teamMember.name} member={teamMember}></TeamMember>);
    }

    render() {
        return (
            <div className="projects__sidebar projects__column">
                <h2>Team name</h2>
                <h3>Members:</h3>
                <div className="projects__sidebar__members">
                    {this.getMembers()}
                </div>
            </div>
        )
    }
}