import React, { Component } from 'react';
import './TeamMember.css';

export default class TeamMember extends Component {
    render() {
        return (
            <div className="teamMember">
                <h3 className="teamMember__name">{this.props.member.name}</h3>
                <h4 className="teamMember__jobTitle">{this.props.member.jobTitle}</h4>
            </div>
        )
    }
}