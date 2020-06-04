import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Pie, Doughnut } from 'react-chartjs-2';
import ProductifyContext from '../../ProductifyContext';
import Project from '../Project/Project';
import './ProjectsSidebar.css';

export default class ProjectsSidebar extends Component {

    static contextType = ProductifyContext;

    constructor(props){
        super(props);
        this.state = {
            pieLabels: ['Backlog', 'In Progress', 'In Review', 'Complete'],
            doughnutLabels: ['Complete', 'Incomplete'],
            isDesktop: false,
        }
    } 

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate = () => {
        this.setState({ 
            ...this.state,
            isDesktop: window.innerWidth > 750 
        });
    }

    getProjects(){
        const context = this.context;
        if (context.projects.length > 0){
            const user = context.usersInfo.find(user => user.id === context.loggedInUser);
            const teamId = user.team_id;
            const projects = context.projects.filter(project => project.team_id === teamId);
            return projects.map(project => {
                let className= ""
                if (context.currentProject === project.id){
                    className = " selectedProject"
                }
                return (
                    <Project className={className} 
                        updateCurrentProject={context.updateCurrentProject} 
                        key={project.id} 
                        project={project}>
                    </Project>
                )
            });
        }
    }

    calculateChartDatasets(category) {
        let context = this.context;
        let tasks = context.tasks.filter(task => task.status === category);
        if (context.currentProject){
            tasks = tasks.filter(task => 
                task.project_id === context.currentProject);
        }
        if (!this.context.showAllUserTasks){
            tasks = tasks.filter(task => task.assignee === context.loggedInUser);
        }
        return tasks.length;
    }

    getChartDatasets() {
        const backlogCount = this.calculateChartDatasets("backlog");
        const inProgressCount = this.calculateChartDatasets("inProgress");
        const inReviewCount = this.calculateChartDatasets("inReview");
        const completeCount = this.calculateChartDatasets("complete");
        const incompleteCount = backlogCount + inProgressCount + inReviewCount;

        const pieDataset = [
            {
                label: 'Tasks',
                backgroundColor: ['#ffebeb', '#e1fcfb', '#ffffd9', '#e0ffd9'],
                borderWidth: 0.4,
                borderColor: '#767676',
                data: [backlogCount, inProgressCount, inReviewCount, completeCount]
            }
        ]
        const doughnutDataset = [
            {
                label: 'Tasks',
                backgroundColor: ['#e0ffd9', '#f4f4f497'],
                borderWidth: 0.4,
                borderColor: '#767676',
                data: [completeCount, incompleteCount]
            }
        ]

        return {
            pieDataset,
            doughnutDataset
        }

    }

    createCharts(){
        const datasets = this.getChartDatasets();
        return (
            <div className="projects__sidebar_charts">
                <Pie
                    data={{
                        labels: this.state.pieLabels,
                        datasets: datasets.pieDataset
                    }}
                    height={300}
                    options={{
                        title:{
                            display:true,
                            text:'Task status',
                            fontSize:15
                        },
                        legend:{
                        display:false,
                        }
                    }}
                />
                <Doughnut
                    data={{
                        labels: this.state.doughnutLabels,
                        datasets: datasets.doughnutDataset
                    }}
                    height={300}
                    options={{
                        title:{
                        display:true,
                        text:'Progress',
                        fontSize:15
                        },
                        legend:{
                        display:false,
                        }
                    }}
                    />
            </div>
        )
    }

    getProjectDetails() {
        return (
            <div>
                <h3 className="project__sidebar_projectTitle">Projects:</h3>
                <div className="projects__sidebar_projects">
                    {this.getProjects()}
                </div>
                {this.state.isDesktop ? this.createCharts() : <></>}
            </div>
        )
    }

    getFilterButtons() {
        let buttonText = this.context.showAllUserTasks ? "show only mine" : "show all";
        return (
            <div className="buttonsContainer">
                <NavLink 
                    to="/newTask" 
                    className="button projects__sidebar_button projects__sidebar_newTaskButton">
                        + new task
                </NavLink>
                <button className="button projects__sidebar_button projects__sidebar_filterButton" onClick={this.context.updateFilterByAssignee}>
                    {buttonText}
                </button>
            </div>
        )
    }

    getBackButton() {
        return (
            <div className="projectSidebar__backButton">
                <NavLink to="/projects" className="button stopButton">back</NavLink>
            </div>
        )
    }

    render() {
        return (
            <ProductifyContext.Consumer>
                {context => {
                    const user = context.usersInfo.find(user => user.id === context.loggedInUser) || {};
                    const team = context.teams.find(team => team.id === user.team_id) || "";
                    const teamName = team.team_name || "";
                    return (
                        <div className="projects__sidebar projects__column">
                            <div className="projects__sidebar_teamName_container">
                                <h2 className="projects__sidebar_teamName projects__column__heading">{teamName}</h2>
                            </div>
                            {this.props.showButton ? this.getFilterButtons() : this.getBackButton()}
                            {this.props.displayProjectInfo && this.getProjectDetails()}    
                        </div>
                    )
                }}
            </ProductifyContext.Consumer>
        )
    }
}