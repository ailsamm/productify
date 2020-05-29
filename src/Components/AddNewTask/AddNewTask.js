import React, { Component } from 'react';
import ProjectsSidebar from '../ProjectsSidebar/ProjectsSidebar';
import ValidationError from '../ValidationError/ValidationError';
import { notNull } from '../../ValidationHelper';
import DatePicker from 'react-date-picker';
import ProductifyContext from '../../ProductifyContext';
import './AddNewTask.css';

export default class AddNewTask extends Component {

    static contextType = ProductifyContext;

    constructor(props){
        super(props);
        this.state = {
            title: {
                touched: false,
                validationMessage: "",
                isValid: false, 
                value: null
            },
            assignee: {
                touched: false, 
                validationMessage: "",
                isValid: false,
                value: null
            },
            project: {
                touched: false, 
                validationMessage: "",
                isValid: false,
                value: null
            },
            description: {
                touched: false, 
                validationMessage: "",
                isValid: true,
                value: null
            },
            deadline: {
                touched: false, 
                validationMessage: "",
                isValid: false,
                value: null
            }
        }
    }

    handleGoBack = () => {
        this.props.history.push("/projects");
    }

    addTaskRequest = (e) => {
        e.preventDefault();
        const newTask = {
            name: this.state.title.value,
            assignee: this.state.assignee.value,
            project: this.state.project.value,
            description: this.state.description.value,
            deadline: this.state.deadline.value,
            status: "backlog",
            id: 44
        }
        this.context.onAddTask(newTask);
        this.props.history.push("/projects");
    
        /*fetch('https://damp-journey-21967.herokuapp.com/api/notes', {
          method: 'POST',
          body: JSON.stringify(newNote),
          headers: {
            'content-type': 'application/json'
          },
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('An error occurred while attempting to add the note')
          }
          return response.json();
        })
        .then(() => {
            this.context.onAddTask(newTask);
            this.props.history.push("/");
        })
        .catch(e => console.log(e));*/
    }

    updateTitle = value => {
        const validation = notNull(value);
        this.setState({
            ...this.state,
            title: {
                touched: true, 
                validationMessage: validation,
                isValid: !validation,
                value
            }
        })
    }

    updateAssignee = value => {
        const validation = notNull(value);
        this.setState({
            ...this.state,
            assignee: {
                touched: true, 
                validationMessage: validation,
                isValid: !validation,
                value: parseInt(value)
            }
        })
    }

    updateProject = value => {
        const validation = notNull(value);
        this.setState({
            ...this.state,
            project: {
                touched: true,
                validationMessage: validation,
                isValid: !validation, 
                value: parseInt(value)
            }
        })
    }

    updateDescription = value => {
        this.setState({
            ...this.state,
            description: {
                touched: true, 
                value
            }
        })
    }

    updateDeadline = value => {
        this.setState({
            ...this.state,
            deadline: {
                touched: true, 
                value: value.toString()
            }
        })
    }

    getMembers(){
        const context = this.context;
        if (context.teams.length > 0){
            const user = context.usersInfo.find(user => user.id === context.loggedInUser);
            const teamId = user.teamId;
            const memberIds = context.teams.find(team => team.id === teamId).members;
            return memberIds.map(memberId => {
                const member = this.context.usersInfo.find(user => user.id === memberId);
                return (
                    <option key={member.id} value={member.id}>{member.firstName} {member.lastName}</option>
                )
            });
        }
    }

    getProjects(){
        const context = this.context;
        if (context.projects.length > 0){
            const user = context.usersInfo.find(user => user.id === context.loggedInUser) || {};
            const teamId = user.teamId;
            const project = context.teams.find(team => team.id === teamId) || {};
            const projectIds = project.projects || [];
            return projectIds.map(projectId => {
                const project = this.context.projects.find(project => project.id === projectId);
                return (
                    <option key={project.id} value={project.id}>{project.name}</option>
                )
            });
        }
    }

    render() {
        const today = new Date();
        return (
            <ProductifyContext.Consumer>
                {context => (
                    <div className="addNewTask">
                        <ProjectsSidebar showButton={false} displayProjectInfo={false}/>
                        <div className="addNewTask__formContainer">
                            <form className="addNewTask__form" onSubmit={e => this.addTaskRequest(e)}>
                                <label htmlFor="addNewTask__title">title:</label>
                                <input name="addNewTask__title" 
                                    id="addNewTask__title" 
                                    onChange={e => this.updateTitle(e.target.value)}
                                    placeholder="buy milk" 
                                    type="text"
                                    aria-required="true">
                                </input>
                                {this.state.title.touched && <ValidationError message={this.state.title.validationMessage}/>}
                                <label htmlFor="addNewTask__assignee">assignee:</label>
                                <select 
                                    className="addNewTask__select"
                                    name="addNewTask__assignee" 
                                    id="addNewTask__assignee" 
                                    aria-required="true"
                                    onChange={e => this.updateAssignee(e.target.value)}>
                                    <option value=""></option>
                                    {this.getMembers()}
                                </select>
                                {this.state.assignee.touched && <ValidationError message={this.state.assignee.validationMessage}/>}
                                <label htmlFor="addNewTask__project">project:</label>
                                <select 
                                    className="addNewTask__select"
                                    name="addNewTask__project" 
                                    id="addNewTask__project" 
                                    aria-required="true"
                                    onChange={e => this.updateProject(e.target.value)}>
                                    <option value=""></option>
                                    {this.getProjects()}
                                </select>
                                {this.state.project.touched && <ValidationError message={this.state.project.validationMessage}/>}
                                <label htmlFor="addNewTask__description">description:</label>
                                <textarea name="addNewTask__description" 
                                    id="addNewTask__description" 
                                    onChange={e => this.updateDescription(e.target.value)}
                                    placeholder="Go to the store and buy the milk"
                                    aria-required="true">
                                </textarea>
                                <label htmlFor="addNewTask__deadline">deadline:</label>
                                <DatePicker name="addNewTask__deadline" 
                                    id="addNewTask__deadline" 
                                    onChange={value => this.updateDeadline(value)} 
                                    dayPlaceholder={today.getUTCDate().toString()}
                                    monthPlaceholder={(today.getUTCMonth() + 1).toString()}
                                    yearPlaceholder={today.getUTCFullYear().toString()}
                                    aria-required="true"
                                    format="MM-dd-y"
                                    minDate={today}
                                />
                                <div className="addNewTask__buttonContainer">
                                    <button type="button" onClick={this.handleGoBack} className="button stopButton">back</button>
                                    <button type="submit" className="button goButton">save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </ProductifyContext.Consumer>
        )
    }
}