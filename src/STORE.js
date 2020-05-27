const STORE = {
    teamName: '<Team Name>',
    isLoggedIn: true,
    loggedInUser: {
        firstName: "Ailsa",
        lastName:"Meechan-Maddon"
    },
    members: [
        {id:2, firstName:'Ada', lastName: "A", jobTitle:'UI designer'},
        {id:3, firstName:'Joe', lastName: "B", jobTitle:'Business lead'},
        {id:4, firstName:'Caroline', lastName: "C", jobTitle:'Project manager'},
        {id:5, firstName:'Blake', lastName: "D", jobTitle:'Backend developer'},
        {id:6, firstName:'Julia', lastName: "E", jobTitle:'Frontend developer'}
    ],
    projects: [{name: "First project", id:1}, {name:"Second project", id:2}],
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