import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

export default class Project extends Component {

    render() {
        return (
            <Link to="" className="project__nav" id={this.props.project.id} onClick={e => this.props.updateCurrentProject(e, this.props.project.id)}>
                <div value={this.props.project.id} id={this.props.project.id} className={`project${this.props.className}`}>
                    <h3 value={this.props.project.id} className="project__name">{this.props.project.name}</h3>
                </div>
            </Link>
        )
    }
}