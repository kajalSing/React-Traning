import React from 'react';


const PrivateLayout = ({children, ...rest}) => {
  return (
    <div className="page page-login">
      <div className="main">{children}</div>
    </div>
  )
}

export default PrivateLayout;