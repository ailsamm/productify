import React from 'react'

const ProductifyContext = React.createContext({
  teamName: "",
  members: [],
  tasks: [],
  isLoggedIn: false,
  loggedInUser: {}
});

export default ProductifyContext;