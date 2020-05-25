import React, { Component } from 'react';
import TaskCard from '../TaskCard/TaskCard';
import ProjectsSidebar from '../ProjectsSidebar/ProjectsSidebar';
import './ProjectsPage.css';

export default class ProjectsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: [
                {name:'Ada', jobTitle:'UI designer'},
                {name:'Joe', jobTitle:'Business lead'},
                {name:'Caroline', jobTitle:'Project manager'},
                {name:'Blake', jobTitle:'Backend developer'},
                {name:'Julia', jobTitle:'Frontend developer'}
            ],
            tasks: [
                {id:1, name:'Add time tracking components', description:'blah...', deadline:'06/02/2020', status:'backlog'},
                {id:2, name:'Deploy app', description:'blah...', deadline:'29/02/2020', status:'backlog'},
                {id:3, name:'Set up server', description:'blah...', deadline:'10/02/2020', status:'inProgress'},
                {id:4, name:'Create endpoints', description:'blah...', deadline:'08/02/2020', status:'inReview'},
                {id:5, name:'Add CRUD functionality', description:'blah...', deadline:'04/02/2020', status:'complete'},
                {id:6, name:'Make endpoints protected', description:'blah...', deadline:'19/02/2020', status:'complete'},
                {id:7, name:'Test with small group', description:'blah...', deadline:'20/02/2020', status:'backlog'},
                {id:8, name:'Add animations to UI', description:'blah...', deadline:'06/02/2020', status:'inProgress'}
            ],
            teamName: "< Team Name >"
        }
    }

    onDragOver = (e) => {
        e.preventDefault();
    }

    onDrop = (e, status) => {
        e.preventDefault();
        const taskId = parseInt(e.dataTransfer.getData("id"));

        let tasks = this.state.tasks.filter((task => {
            if (task.id === taskId){
                task.status = status;
            }
            return task;
        }));

        this.setState({
            ...this.state,
            tasks
        })
    }
    
    render() {
        return (
            <div className="projects">
                <ProjectsSidebar/>
                <div onDragOver={(e) => this.onDragOver(e)} 
                onDrop={(e)=>{this.onDrop(e, "backlog")}} 
                className="projects__tasksBacklog projects__column">
                    <h2>Backlog</h2>
                    {this.state.tasks.map(task => {
                        if (task.status === 'backlog'){
                            return <TaskCard key={task.id} task={task}/>
                        }
                    })}
                </div>
                <div onDragOver={(e) => this.onDragOver(e)} 
                onDrop={(e)=>{this.onDrop(e, "inProgress")}} 
                className="projects__tasksInProgress projects__column">
                    <h2>In progress</h2>
                    {this.state.tasks.map(task => {
                        if (task.status === 'inProgress'){
                            return <TaskCard key={task.id} task={task}/>
                        }
                    })}
                </div>
                <div onDragOver={(e) => this.onDragOver(e)} 
                onDrop={(e)=>{this.onDrop(e, "inReview")}} 
                className="projects__tasksInReview projects__column">
                    <h2>In review</h2>
                    {this.state.tasks.map(task => {
                        if (task.status === 'inReview'){
                            return <TaskCard key={task.id} task={task}/>
                        }
                    })}
                </div>
                <div onDragOver={(e) => this.onDragOver(e)} 
                onDrop={(e)=>{this.onDrop(e, "complete")}} 
                className="projects__tasksComplete projects__column">
                    <h2>Complete</h2>
                    {this.state.tasks.map(task => {
                        if (task.status === 'complete'){
                            return <TaskCard key={task.id} task={task}/>
                        }
                    })}
                </div>
            </div>
        )
    }
}