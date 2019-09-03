import React from 'react';
import AuthLayout from '../Layout/AuthLayout';
import { Route } from 'react-router-dom'



const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <AuthLayout>
          <Component {...matchProps} />
        </AuthLayout>
      )}
    />
  )
};

export default AuthRoute;