import React from 'react'

const ProductifyContext = React.createContext({
  teamName: "",
  members: [],
  projects: [],
  tasks: [],
  onDrop: () => {},
  isLoggedIn: false,
  loggedInUser: {}
});

export default ProductifyContext;