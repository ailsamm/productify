import React, { Component } from 'react';
import TeamMember from '../TeamMember/TeamMember';
import Project from '../Project/Project';
import { Pie, Doughnut } from 'react-chartjs-2';
import ProductifyContext from '../../ProductifyContext';
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

    getMembers(){
        const members = this.context.members || [];
        return members.map(teamMember => <TeamMember key={teamMember.name} member={teamMember}></TeamMember>);
    }

    getProjects(){
        const projects = this.context.projects || [];
        return projects.map(project => {
            let className= ""
            if (this.props.currentProject === project.id){
                className = " selectedProject"
            }
            return <Project className={className} updateCurrentProject={this.props.updateCurrentProject} key={project.id} project={project}></Project>})
    }

    calculateChartDatasets() {
        let value = this.context;
        const backlogCount = value.tasks.filter(task => 
            task.status === "backlog" && task.project === this.props.currentProject).length;
        const inProgressCount = value.tasks.filter(task => 
            task.status === "inProgress" && task.project === this.props.currentProject).length;
        const inReviewCount = value.tasks.filter(task => 
            task.status === "inReview" && task.project === this.props.currentProject).length;
        const completeCount = value.tasks.filter(task => 
            task.status === "complete" && task.project === this.props.currentProject).length;
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
            <div className="projects__sidebar__charts">
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
        return this.props.currentProject != null ? this.createCharts() :
            <div>
                <h3>Members:</h3>
                <div className="projects__sidebar__members">
                    {this.getMembers()}
                </div> 
            </div>
    }

    render() {
        return (
            <div className="projects__sidebar projects__column">
                <h2>Team name</h2>
                <h3>Projects:</h3>
                <div className="projects__sidebar__members">
                    {this.getProjects()}
                </div>
                {this.getContent()}          
            </div>
        )
    }
}