import React, { Component } from 'react';
import ProjectsSidebar from '../ProjectsSidebar/ProjectsSidebar';
import ProjectsColumn from '../ProjectsColumn/ProjectsColumn';
import './ProjectsPage.css';

export default class ProjectsPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            columns: ['Backlog', 'In Progress', 'In Review', 'Complete']
        }
    }

    onDragOver = (e) => {
        e.preventDefault();
    }
    
    render() {
        return (
            <div className="projects">
                <ProjectsSidebar/>
                {this.state.columns.map(column => <ProjectsColumn name={column}/>)}
            </div>
        )
    }
        
    
}