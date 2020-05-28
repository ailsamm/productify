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
        {id:1, teamName: 'Best Team Ever', members: [1,2,3,4,5,6], projects: [1,2]}
    ],
    projects: [
        {name: "First project", id:1}, 
        {name:"Second project", id:2},
        {name:"Third project", id:3}
    ],
    tasks: [
        {id:1, project:1, name:'Add time tracking components', description:'blah...', deadline:'06/02/2020', status:'backlog', assignee:2},
        {id:2, project:1, name:'Deploy app', description:'blah...', deadline:'29/02/2020', status:'backlog', assignee:1},
        {id:3, project:1, name:'Set up server', description:'blah...', deadline:'10/02/2020', status:'inProgress', assignee:3},
        {id:4, project:1, name:'Create endpoints', description:'blah...', deadline:'08/02/2020', status:'inReview', assignee:4},
        {id:5, project:1, name:'Add CRUD functionality', description:'blah...', deadline:'04/02/2020', status:'complete', assignee:5},
        {id:6, project:2, name:'Make endpoints protected', description:'blah...', deadline:'19/02/2020', status:'complete', assignee:6},
        {id:7, project:2, name:'Test with small group', description:'blah...', deadline:'20/02/2020', status:'backlog', assignee:1},
        {id:8, project:2, name:'Add animations to UI', description:'blah...', deadline:'06/02/2020', status:'inProgress', assignee:2}
    ]
}

export default STORE;