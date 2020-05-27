import React from 'react'

const ProductifyContext = React.createContext({
  teamName: "",
  members: [],
  projects: [],
  tasks: [],
  loggedInUser: {},
  onDrop: () => {},
  onAddTask: () => {},
  updateCurrentProject: () => {},
  onDeleteTask: () => {},
  isLoggedIn: false,
  currentProject: null
});

export default ProductifyContext;