import React from 'react';


const Test = (props) => {
  const {name, children}= props;
  return(
    <div>
      <p> hello {name} </p>
      <p>{ children }</p>
    </div>
  )
   
}

export default Test;