import React from 'react'

const ProductifyContext = React.createContext({
  teamName: "",
  usersLogin: [],
  usersInfo: [],
  projects: [],
  teams: [],
  tasks: [],
  loggedInUser: {},
  onDrop: () => {},
  onAddTask: () => {},
  updateCurrentProject: () => {},
  onDeleteTask: () => {},
  onSignUpUser: () => {},
  isLoggedIn: false,
  currentProject: null
});

export default ProductifyContext;