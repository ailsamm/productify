const STORE = {
    teamName: '<Team Name>',
    isLoggedIn: true,
    loggedInUser: {
        firstName: "Ailsa",
        lastName:"Meechan-Maddon"
    },
    members: [
        {name:'Ada', jobTitle:'UI designer'},
        {name:'Joe', jobTitle:'Business lead'},
        {name:'Caroline', jobTitle:'Project manager'},
        {name:'Blake', jobTitle:'Backend developer'},
        {name:'Julia', jobTitle:'Frontend developer'}
    ],
    tasks: [
        {id:1, name:'Add time tracking components', description:'blah...', deadline:'06/02/2020', status:'backlog'},
        {id:2, name:'Deploy app', description:'blah...', deadline:'29/02/2020', status:'backlog'},
        {id:3, name:'Set up server', description:'blah...', deadline:'10/02/2020', status:'inProgress'},
        {id:4, name:'Create endpoints', description:'blah...', deadline:'08/02/2020', status:'inReview'},
        {id:5, name:'Add CRUD functionality', description:'blah...', deadline:'04/02/2020', status:'complete'},
        {id:6, name:'Make endpoints protected', description:'blah...', deadline:'19/02/2020', status:'complete'},
        {id:7, name:'Test with small group', description:'blah...', deadline:'20/02/2020', status:'backlog'},
        {id:8, name:'Add animations to UI', description:'blah...', deadline:'06/02/2020', status:'inProgress'}
    ]
}

export default STORE;