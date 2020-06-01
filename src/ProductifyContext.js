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
  isLoggedIn: false,
  currentProject: null
});

export default ProductifyContext;