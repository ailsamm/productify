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
                {value => {
                    const tasks = value.tasks || [];
                    return (
                        <div onDragOver={(e) => this.onDragOver(e)} 
                        onDrop={(e)=>{value.onDrop(e, this.getStatusName(name))}} 
                        className={`projects__tasks${name.replace(" ", "")} projects__column`}>
                            <h2>{name}</h2>
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