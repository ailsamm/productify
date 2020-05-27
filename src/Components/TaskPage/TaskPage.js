import React, { Component } from 'react';
import ProjectSidebar from '../ProjectsSidebar/ProjectsSidebar';
import ProductifyContext from '../../ProductifyContext';
import './TaskPage.css';

export default class TaskPage extends Component {

    static contextType = ProductifyContext;

    handleGoBack = () => {
        this.props.history.goBack();
    }

    handleDelete = () => {
        const taskId = this.props.match.params.taskId;
        this.context.onDeleteTask(parseInt(taskId));
        this.props.history.push("/projects");
    }

    render() {
        return (
            <ProductifyContext.Consumer>
                {context => {
                    const currentTask = context.tasks.find(task => task.id === parseInt(this.props.match.params.taskId)) || {};
                    const assignee = context.members.find(member => member.id === currentTask.assignee) || "";
                    const assigneeName = assignee.firstName || "";
                    return (
                    <div className="taskPage">
                        <ProjectSidebar/>
                        <div className="taskPage__main">
                            <h2>{currentTask.name}</h2>
                            <div className="taskPage__assignee taskPage__section">
                                <h3><span className="taskPage__section__title">Assignee: </span> {assigneeName}</h3>
                            </div>
                            <div className="taskPage__description taskPage__section">
                                <h3 className="taskPage__section__title">Description:</h3>
                                <h4>{currentTask.description}</h4>
                            </div>
                            <div className="taskPage__deadline taskPage__section">
                                <h3 className="taskPage__section__title">Deadline:</h3>
                                <h4>{currentTask.deadline}</h4>
                            </div>
                            <button type="submit" onClick={this.handleGoBack} className="button stopButton">back</button>
                            <button type="submit" onClick={this.handleDelete} className="button stopButton">delete</button>
                        </div>
                    </div>
                )}}
            </ProductifyContext.Consumer>
        )
    }
}