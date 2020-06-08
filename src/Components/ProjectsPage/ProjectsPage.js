import React, { Component } from 'react';
import ProjectsSidebar from '../ProjectsSidebar/ProjectsSidebar';
import ProjectsColumn from '../ProjectsColumn/ProjectsColumn';
import './ProjectsPage.css';

export default class ProjectsPage extends Component {

    constructor(props){
        super(props);
        // names of columns
        this.state = {
            columns: ['Backlog', 'In Progress', 'In Review', 'Complete']
        }
    }
    
    render() {
        return (
            <div className="projects swipeView">
                <ProjectsSidebar showButton={true} displayProjectInfo={true}/>
                {this.state.columns.map(column => <ProjectsColumn 
                    key={column} 
                    name={column}
                    />
                )}
            </div>
        );     
    }    
}
