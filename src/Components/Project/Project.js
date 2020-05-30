import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductifyContext from '../../ProductifyContext';
import './Project.css';

export default class Project extends Component {

    render() {
        const project = this.props.project;
        return (
            <ProductifyContext.Consumer>
                {context => {
                    return (
                        <Link to="" className="project__nav" 
                            id={project.id} 
                            onClick={e => context.updateCurrentProject(e, project.id)}>
                            <div context={project.id} 
                                id={project.id} 
                                className={`project${this.props.className}`}>
                                <h3 context={project.id} className="project__name">{project.project_name}</h3>
                            </div>
                        </Link>
                    )
                }}
                
            </ProductifyContext.Consumer>
        )
    }
}