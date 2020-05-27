import React, { Component } from 'react';
import ProjectsSidebar from '../ProjectsSidebar/ProjectsSidebar';
import ProductifyContext from '../../ProductifyContext';
import './AddNewTask.css';

export default class AddNewTask extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: null,
            assignee: null,
            project: null,
            description: null,
            deadline: null
        }
    }

    handleGoBack = () => {
        this.props.history.push("/projects");
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            title: this.state.title,
            assignee: this.state.assignee,
            project: this.state.project,
            description: this.state.description,
            deadline: this.state.deadline
        }
    }

    updateTitle = val => {
        this.setState({
            ...this.state,
            title: val
        })
    }

    updateAssignee = val => {
        this.setState({
            ...this.state,
            assignee: parseInt(val)
        })
    }

    updateProject = val => {
        this.setState({
            ...this.state,
            project: parseInt(val)
        })
    }

    updateDescription = val => {
        this.setState({
            ...this.state,
            description: val
        })
    }

    updateDeadline = val => {
        this.setState({
            ...this.state,
            deadline: val
        })
    }

    render() {
        return (
            <ProductifyContext.Consumer>
                {context => (
                    <div className="addNewTask">
                        <ProjectsSidebar/>
                        <div className="addNewTask__formContainer">
                            <form className="addNewTask__form">
                                <label htmlFor="addNewTask__title">title:</label>
                                <input name="addNewTask__title" 
                                    id="addNewTask__title" 
                                    onChange={e => this.updateTitle(e.target.value)}
                                    placeholder="buy milk" 
                                    type="text">
                                </input>
                                <label htmlFor="addNewTask__assignee">assignee:</label>
                                <select 
                                    className="addNewTask__select"
                                    name="addNewTask__assignee" 
                                    id="addNewTask__assignee" 
                                    aria-required="true"
                                    onChange={e => this.updateAssignee(e.target.value)}>
                                    <option value=""></option>
                                    {context.members.map(member => (
                                        <option key={member.id} value={member.id}>{member.firstName} {member.lastName}</option>
                                    ))}
                                </select>
                                <label htmlFor="addNewTask__project">project:</label>
                                <select 
                                    className="addNewTask__select"
                                    name="addNewTask__project" 
                                    id="addNewTask__project" 
                                    aria-required="true"
                                    onChange={e => this.updateProject(e.target.value)}>
                                    <option value=""></option>
                                    {context.projects.map(project => (
                                        <option key={project.id} value={project.id}>{project.name}</option>
                                    ))}
                                </select>
                                <label htmlFor="addNewTask__description">description:</label>
                                <textarea name="addNewTask__description" 
                                    id="addNewTask__description" 
                                    onChange={e => this.updateDescription(e.target.value)}
                                    placeholder="Go to the store and buy the milk">
                                </textarea>
                                <label htmlFor="addNewTask__deadline">deadline:</label>
                                <input name="addNewTask__deadline" 
                                    id="addNewTask__deadline" 
                                    onChange={e => this.updateDeadline(e.target.value)}
                                    placeholder="20/06/2020">
                                </input>
                                <div className="addNewTask__buttonContainer">
                                    <button type="submit" onClick={this.handleGoBack} className="button addNewTask__backButton">back</button>
                                    <button type="submit" onClick={e => this.handleSubmit(e)} className="button addNewTask__saveButton">save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </ProductifyContext.Consumer>
        )
    }
}