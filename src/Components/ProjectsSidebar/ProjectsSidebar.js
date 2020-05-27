import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Pie, Doughnut } from 'react-chartjs-2';
import ProductifyContext from '../../ProductifyContext';
import TeamMember from '../TeamMember/TeamMember';
import Project from '../Project/Project';
import './ProjectsSidebar.css';

export default class ProjectsSidebar extends Component {

    static contextType = ProductifyContext;

    constructor(props){
        super(props);
        this.state = {
            pieLabels: ['Backlog', 'In Progress', 'In Review', 'Complete'],
            doughnutLabels: ['Complete', 'Incomplete']
        }
    } 

    getTeamMember = (memberId) => {
        const teamMember = this.context.usersInfo.find(user => user.id === memberId);
        return (
            <TeamMember key={teamMember.firstName} member={teamMember}></TeamMember>
        )
    }

    getMembers(){
        const context = this.context;
        if (context.teams.length > 0){
            const teamId = context.loggedInUser.teamId;
            const members = context.teams.find(team => team.id === teamId).members;
            return members.map(this.getTeamMember);
        }
    }

    getProjects(){
        const context = this.context;
        if (context.projects.length > 0){
            const teamId = context.loggedInUser.teamId;
            const projectIds = context.teams.find(team => team.id === teamId).projects;
            return projectIds.map(projectId => {
                const project = this.context.projects.find(project => project.id === projectId);
                let className= ""
                if (context.currentProject === project.id){
                    className = " selectedProject"
                }
                return (
                    <Project className={className} updateCurrentProject={context.updateCurrentProject} key={project.id} project={project}></Project>
                )
            });
        }
    }

    calculateChartDatasets() {
        let context = this.context;
        const backlogCount = context.tasks.filter(task => 
            task.status === "backlog" && task.project === context.currentProject).length;
        const inProgressCount = context.tasks.filter(task => 
            task.status === "inProgress" && task.project === context.currentProject).length;
        const inReviewCount = context.tasks.filter(task => 
            task.status === "inReview" && task.project === context.currentProject).length;
        const completeCount = context.tasks.filter(task => 
            task.status === "complete" && task.project === context.currentProject).length;
        const incompleteCount = backlogCount + inProgressCount + inReviewCount;

        const pieDataset = [
            {
                label: 'Tasks',
                backgroundColor: ['#ffc0cb8a', '#c0fffb95', '#ebeb7d6e', '#a8f7944d'],
                borderWidth: 0.4,
                borderColor: '#767676',
                data: [backlogCount, inProgressCount, inReviewCount, completeCount]
            }
        ]
        const doughnutDataset = [
            {
                label: 'Tasks',
                backgroundColor: ['#a8f7944d', '#f4f4f497'],
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
                        labels: this.state.pieLabels,
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
        return this.context.currentProject != null ? this.createCharts() :
            <div>
                <h3>Members:</h3>
                <div className="projects__sidebar__members">
                    {this.getMembers()}
                </div> 
            </div>
    }

    getProjectDetails() {
        return (
            <div>
                <h3>Projects:</h3>
                <div className="projects__sidebar_members">
                    {this.getProjects()}
                </div>
                {this.getContent()}
            </div>
        )
    }

    render() {
        return (
            <div className="projects__sidebar projects__column">
                <div className="newTaskButtonContainer">
                    <NavLink 
                        to="/newTask" 
                        className="button projects__sidebar_newTaskButton">
                            + new task
                    </NavLink>
                </div>
                <h2 className="projects__sidebar_teamName">Team name</h2>
                {!this.props.addTask ? this.getProjectDetails() : <></>}    
            </div>
        )
    }
}