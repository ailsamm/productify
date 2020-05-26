import React from 'react'

const ProductifyContext = React.createContext({
  teamName: "",
  members: [],
  projects: [],
  tasks: [],
  onDrop: () => {},
  loggedInUser: {},
  updateCurrentProject: () => {},
  isLoggedIn: false,
  currentProject: null
});

export default ProductifyContext;