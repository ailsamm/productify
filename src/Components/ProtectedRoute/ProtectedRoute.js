import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    return (
      <Route {...rest} render={
        props => {
            console.log(isLoggedIn)
          if (isLoggedIn) {
            return <Component {...rest} {...props} />
          } else {
            return <Redirect to={
              {
                pathname: '/unauthorized',
                state: {
                  from: props.location
                }
              }
            } />
          }
        }
      } />
    )
  }

export default ProtectedRoute;