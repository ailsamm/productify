import React, { Component } from 'react';
import TaskCard from '../TaskCard/TaskCard';
import ProductifyContext from '../../ProductifyContext';
import './ProjectsColumn.css';

export default class ProjectsColumn extends Component {

    getStatusName(name){
        const joined = name.replace(" ", "");
        const status = joined.charAt(0).toLowerCase() + joined.slice(1);
        return status;
    }

    onDragOver = (e) => {
        e.preventDefault();
    }

    render() {
        const name = this.props.name || '';
        return (
            <ProductifyContext.Consumer>
                {context => {
                    let tasks = context.tasks || [];
                    if (context.currentProject){
                        tasks = tasks.filter(task => task.project_id === context.currentProject);
                    }
                    if (!context.showAllUserTasks){
                        tasks = tasks.filter(task => task.assignee === context.loggedInUser);
                    }
                    return (
                        <div onDragOver={(e) => this.onDragOver(e)} 
                        onDrop={(e)=>{context.onDrop(e, this.getStatusName(name))}} 
                        className={`projects__tasks${name.replace(" ", "")} projects__column`}>
                            <div className="projects__column__heading">
                                <h2>{name.toUpperCase()}</h2>
                            </div>
                            {tasks.map(task => {
                                if (task.status === this.getStatusName(name)){
                                    return <TaskCard key={task.id} task={task}/>
                                }
                                return null;
                            })}
                        </div>
                )}}
            </ProductifyContext.Consumer>
        )
    }
}