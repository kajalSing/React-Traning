import React from 'react';
import PrivateLayout from '../Layout/PrivateLayout';
import { Route } from 'react-router-dom'



const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <PrivateLayout>
          <Component {...matchProps} />
        </PrivateLayout>
      )}
    />
  )
};

export default PrivateRoute;