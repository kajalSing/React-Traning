import React from 'react';
import trainees from './data/trainee';
import { Link } from 'react-router-dom';

const TraineeList = (props)=> {
  //const { match } = this.props;
  return (
    <ul>
      {trainees.map(field => (
        <li>{field.name}</li>
      ))}
       
    </ul>
  )


  
}
export default TraineeList;










//  {/* {trainees.map(field => (
//         <Link to ={`${match.path}/${trainees.id}`} >
//           {field.name}
//         </Link>
//       ))} */}