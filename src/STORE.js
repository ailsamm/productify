import moment from 'moment';

const STORE = {
    isLoggedIn: true,
    loggedInUser: 1,
    usersLogin: [
        {user_id: 1, email_address: "aaa@gmail.com", password: "aaa"},
        {user_id: 2, email_address: "bbb@gmail.com", password: "bbb"},
        {user_id: 3, email_address: "ccc@gmail.com", password: "ccc"},
        {user_id: 4, email_address: "ddd@gmail.com", password: "ddd"},
        {user_id: 5, email_address: "eee@gmail.com", password: "eee"},
        {user_id: 6, email_address: "fff@gmail.com", password: "fff"}
    ],
    usersInfo: [
        {id:1, first_name: "Ada", last_name: "A", job_title:'UI designer', team_id: 1},
        {id:2, first_name:'Billie', last_name: "B", job_title:'Business lead', team_id: 1},
        {id:3, first_name:'Caroline', last_name: "C", job_title:'Project manager', team_id: 1},
        {id:4, first_name:'Dani', last_name: "D", job_title:'Backend developer', team_id: 1},
        {id:5, first_name:'Emily', last_name: "E", job_title:'Frontend developer', team_id: 1},
        {id:6, first_name:'Fiona', last_name: "F", job_title:'UI designer', team_id: 1}
    ],
    teams: [
        {id:1, team_name: 'Best Team Ever'}
    ],
    projects: [
        {project_name: "First project", id:1, team_id: 1}, 
        {project_name:"Second project", id:2, team_id: 1},
        {project_name:"Third project", id:3, team_id: 2}
    ],
    tasks: [
        {id:1, project_id:1, task_name:'Add time tracking components', description:'blah...', deadline: moment().toISOString(), status:'backlog', assignee:2},
        {id:2, project_id:1, task_name:'Deploy app', description:'blah...', deadline: moment().toISOString(), status:'backlog', assignee:1},
        {id:3, project_id:1, task_name:'Set up server', description:'blah...', deadline: moment().toISOString(), status:'inProgress', assignee:3},
        {id:4, project_id:1, task_name:'Create endpoints', description:'blah...', deadline: moment().toISOString(), status:'inReview', assignee:4},
        {id:5, project_id:1, task_name:'Add CRUD functionality', description:'blah...', deadline: moment().toISOString(), status:'complete', assignee:5},
        {id:6, project_id:2, task_name:'Make endpoints protected', description:'blah...', deadline: moment().toISOString(), status:'complete', assignee:6},
        {id:7, project_id:2, task_name:'Test with small group', description:'blah...', deadline: moment().toISOString(), status:'backlog', assignee:1},
        {id:8, project_id:2, task_name:'Add animations to UI', description:'blah...', deadline: moment().toISOString(), status:'inProgress', assignee:2}
    ]
}

export default STORE;
