import NavBar from '../../Layout/Component/NavBar';
import React from 'react';



const AuthLayout = ({children, ...rest}) => {
  return (
    <div className="page page-dashboard">
      <NavBar />
      <div className="main">{children}</div>
    </div>
  )
}

export default AuthLayout;