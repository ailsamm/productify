import React, { Component } from 'react';
import ProjectsSidebar from '../ProjectsSidebar/ProjectsSidebar';
import ProjectsColumn from '../ProjectsColumn/ProjectsColumn';
import './ProjectsPage.css';

export default class ProjectsPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            columns: ['Backlog', 'In Progress', 'In Review', 'Complete'],
            currentProject: 2
        }
    }

    updateCurrentProject = (e, projectId) => {
        e.preventDefault();
        this.setState({
            ...this.state.columns,
            currentProject: projectId
        })
    }
    
    render() {
        return (
            <div className="projects">
                <ProjectsSidebar updateCurrentProject={this.updateCurrentProject}/>
                {this.state.columns.map(column => <ProjectsColumn 
                            currentProject={this.state.currentProject} 
                            key={column} 
                            name={column}/>
                )}
            </div>
        )
    }    
}