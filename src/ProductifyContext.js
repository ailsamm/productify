import React from 'react'

const ProductifyContext = React.createContext({
  teamName: "",
  members: [],
  tasks: [],
  onDrop: () => {},
  isLoggedIn: false,
  loggedInUser: {}
});

export default ProductifyContext;