import React, { Component } from 'react';
import ProjectsSidebar from '../ProjectsSidebar/ProjectsSidebar';
import ProjectsColumn from '../ProjectsColumn/ProjectsColumn';
import ProductifyContext from '../../ProductifyContext';
import './ProjectsPage.css';

export default class ProjectsPage extends Component {

    static contextType = ProductifyContext;

    constructor(props){
        super(props);
        this.state = {
            columns: ['Backlog', 'In Progress', 'In Review', 'Complete'],
            currentProject: null,
            backlogCount: 0,
            inProgressCount: 0,
            inReviewCount: 0,
            completeCount: 0
        }
    }

    updateCurrentProject = (e, projectId) => {
        e.preventDefault();
        let updatedProjectId = projectId;
        if (projectId === this.state.currentProject){
            updatedProjectId = null;
        }
        this.setState({
            ...this.state.columns,
            currentProject: updatedProjectId
        })
    }
    
    render() {
        return (
            <div className="projects">
                <ProjectsSidebar 
                updateCurrentProject={this.updateCurrentProject}
                currentProject={this.state.currentProject}
                />
                {this.state.columns.map(column => <ProjectsColumn 
                    currentProject={this.state.currentProject} 
                    key={column} 
                    name={column}/>
                )}
            </div>
        )
    }    
}
