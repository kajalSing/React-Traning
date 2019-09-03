import React from 'react';
import { football, Cricket } from '../../config/constrants';

class RadioButtonGroup extends React.Component {
  render(){
    const {  cricketOption, footballOption, handleclick } = this.props;
    return (
      <>
      {footballOption === 'Football' ? (
        <>
         {football.map(field => (
           <div key={field.value}> 
             <label
               cricketOption={cricketOption}
               footballOption={footballOption}
               onChange={handleclick} >
               <input
                 type="radio"
                 value ={field.value}
               />
               {field.value}
           
             </label>
           </div>
         ))}
         </>
      ) : (
        <>
        {Cricket.map(field => (
          <div key={field.value}> 
            <label
              cricketOption={cricketOption}
              footballOption={footballOption}
              onChange={handleclick} >
              <input
                type="radio"
                value ={field.value}
              />
              {field.value}
          
            </label>
          </div>
        ))}
        </>
      
      )}
       

      </>
    )
  }
}

export default RadioButtonGroup;
