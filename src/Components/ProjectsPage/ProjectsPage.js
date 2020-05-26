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
            currentProject: null
        }
    }

    componentDidMount() {
        if (this.context.projects.length > 0){
            const firstProjectId = this.context.projects[0].id;
            this.setState({
                ...this.state.columns,
                currentProject: firstProjectId
            })
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