import React, { Component } from 'react';
import ProjectSidebar from '../ProjectsSidebar/ProjectsSidebar';
import ProductifyContext from '../../ProductifyContext';
import moment from 'moment';
import './TaskPage.css';

export default class TaskPage extends Component {

    static contextType = ProductifyContext;

    handleGoBack = () => {
        this.props.history.goBack();
    }

    handleDelete = () => {
        const taskId = this.props.match.params.taskId;
        this.context.onDeleteTask(parseInt(taskId));
        this.props.history.goBack();
    }

    getDeadline(deadline){
        return moment(deadline).format("MMM Do YYYY");
    }

    render() {
        return (
            <ProductifyContext.Consumer>
                {context => {
                    const currentTask = context.tasks.find(task => task.id === parseInt(this.props.match.params.taskId)) || {};
                    const assignee = context.usersInfo.find(user => user.id === currentTask.assignee) || "";
                    const assigneeName = assignee.first_name || "";
                    return (
                        <div className="taskPage">
                            <ProjectSidebar showButton={true} displayProjectInfo={true}/>
                            <div className="taskPage__main">
                                <h2>{currentTask.task_name}</h2>
                                <div className="taskPage__assignee taskPage__section">
                                    <h3><span className="taskPage__section__title">Assignee: </span> {assigneeName}</h3>
                                </div>
                                <div className="taskPage__description taskPage__section">
                                    <h3 className="taskPage__section__title">Description:</h3>
                                    <h4>{currentTask.description}</h4>
                                </div>
                                <div className="taskPage__deadline taskPage__section">
                                    <h3 className="taskPage__section__title">Deadline:</h3>
                                    <h4>{this.getDeadline(currentTask.deadline)}</h4>
                                </div>
                                <div className="taskPage__buttons">
                                    <button type="submit" onClick={this.handleGoBack} className="button stopButton">back</button>
                                    <button type="submit" onClick={this.handleDelete} className="button deleteButton">delete</button>
                                </div>
                            </div>
                        </div>
                )}}
            </ProductifyContext.Consumer>
        )
    }
}