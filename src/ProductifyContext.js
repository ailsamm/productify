import React from 'react'

const ProductifyContext = React.createContext({
  usersLogin: [],
  usersInfo: [],
  projects: [],
  teams: [],
  tasks: [],
  loggedInUser: null,
  onDrop: () => {},
  onAddTask: () => {},
  updateCurrentProject: () => {},
  onDeleteTask: () => {},
  onSignUpUser: () => {},
  onSignOutUser: () => {},
  updateFilterByAssignee: () => {},
  isLoggedIn: false,
  currentProject: null
});

export default ProductifyContext;