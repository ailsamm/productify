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
            columns: ['Backlog', 'In Progress', 'In Review', 'Complete']
        }
    }
    
    render() {
        return (
            <div className="projects">
                <ProjectsSidebar/>
                {this.state.columns.map(column => <ProjectsColumn 
                    key={column} 
                    name={column}
                    />
                )}
            </div>
        )     
    }    
}
