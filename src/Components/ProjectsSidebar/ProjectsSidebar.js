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
            isDesktop: false
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

    calculateChartDatasets() {
        let context = this.context;
        const backlogCount = context.tasks.filter(task => 
            task.status === "backlog" && task.project_id === context.currentProject).length;
        const inProgressCount = context.tasks.filter(task => 
            task.status === "inProgress" && task.project_id === context.currentProject).length;
        const inReviewCount = context.tasks.filter(task => 
            task.status === "inReview" && task.project_id === context.currentProject).length;
        const completeCount = context.tasks.filter(task => 
            task.status === "complete" && task.project_id === context.currentProject).length;
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
        const datasets = this.calculateChartDatasets();
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

    getContent(){
        return this.context.currentProject != null ? this.createCharts() : <div></div>
    }

    getProjectDetails() {
        return (
            <div>
                <h3>Projects:</h3>
                <div className="projects__sidebar_members">
                    {this.getProjects()}
                </div>
                {this.state.isDesktop ? this.getContent() : <></>}
            </div>
        )
    }

    getNewTaskButton() {
        return (
            <div className="newTaskButtonContainer">
                <NavLink 
                    to="/newTask" 
                    className="button projects__sidebar_newTaskButton">
                        + new task
                </NavLink>
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
                            <h2 className="projects__sidebar_teamName projects__column__heading">{teamName}</h2>
                            {this.props.showButton && this.getNewTaskButton()}
                            {this.props.displayProjectInfo ? this.getProjectDetails() : <></>}    
                        </div>
                    )
                }}
            </ProductifyContext.Consumer>
        )
    }
}