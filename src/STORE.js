import moment from 'moment';

const STORE = {
    isLoggedIn: true,
    loggedInUser: 1,
    usersLogin: [
        {userId: 1, emailAddress: "aaa@gmail.com", password: "aaa"},
        {userId: 2, emailAddress: "bbb@gmail.com", password: "bbb"},
        {userId: 3, emailAddress: "ccc@gmail.com", password: "ccc"},
        {userId: 4, emailAddress: "ddd@gmail.com", password: "ddd"},
        {userId: 5, emailAddress: "eee@gmail.com", password: "eee"},
        {userId: 6, emailAddress: "fff@gmail.com", password: "fff"}
    ],
    usersInfo: [
        {id:1, firstName: "Ada", lastName: "A", jobTitle:'UI designer', teamId: 1},
        {id:2, firstName:'Billie', lastName: "B", jobTitle:'Business lead', teamId: 1},
        {id:3, firstName:'Caroline', lastName: "C", jobTitle:'Project manager', teamId: 1},
        {id:4, firstName:'Dani', lastName: "D", jobTitle:'Backend developer', teamId: 1},
        {id:5, firstName:'Emily', lastName: "E", jobTitle:'Frontend developer', teamId: 1},
        {id:6, firstName:'Fiona', lastName: "F", jobTitle:'UI designer', teamId: 1}
    ],
    teams: [
        {id:1, teamName: 'Best Team Ever'}
    ],
    projects: [
        {projectName: "First project", id:1, teamId: 1}, 
        {projectName:"Second project", id:2, teamId: 1},
        {projectName:"Third project", id:3, teamId: 2}
    ],
    tasks: [
        {id:1, projectId:1, taskName:'Add time tracking components', description:'blah...', deadline: moment().toISOString(), status:'backlog', assignee:2},
        {id:2, projectId:1, taskName:'Deploy app', description:'blah...', deadline: moment().toISOString(), status:'backlog', assignee:1},
        {id:3, projectId:1, taskName:'Set up server', description:'blah...', deadline: moment().toISOString(), status:'inProgress', assignee:3},
        {id:4, projectId:1, taskName:'Create endpoints', description:'blah...', deadline: moment().toISOString(), status:'inReview', assignee:4},
        {id:5, projectId:1, taskName:'Add CRUD functionality', description:'blah...', deadline: moment().toISOString(), status:'complete', assignee:5},
        {id:6, projectId:2, taskName:'Make endpoints protected', description:'blah...', deadline: moment().toISOString(), status:'complete', assignee:6},
        {id:7, projectId:2, taskName:'Test with small group', description:'blah...', deadline: moment().toISOString(), status:'backlog', assignee:1},
        {id:8, projectId:2, taskName:'Add animations to UI', description:'blah...', deadline: moment().toISOString(), status:'inProgress', assignee:2}
    ]
}

export default STORE;
