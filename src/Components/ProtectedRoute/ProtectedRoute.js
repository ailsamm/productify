import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, loggedInUser, ...rest }) => {
    return (
      <Route {...rest} render={
        props => {
          if (loggedInUser !== null) {
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