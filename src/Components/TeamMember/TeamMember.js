import React, { Component } from 'react';
import './TeamMember.css';

export default class TeamMember extends Component {
    render() {
        const member = this.props.member;
        const lastInitial = member.last_name[0] + ".";
        return (
            <div className="teamMember">
                <h3 className="teamMember__name">{member.first_name} {lastInitial}</h3>
                <h4 className="teamMember__jobTitle">{member.job_title}</h4>
            </div>
        )
    }
}