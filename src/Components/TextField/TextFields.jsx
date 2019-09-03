import React from 'react';
import PropTypes from 'prop-types';

import style from './style';


const TextFields = (props)  => {
  

  const {value , error} = props;
  const errorStyle = props.error ? style.error : {}
  
  return (
    <div>
      <input type="text" value={value} />
      {
        error && (
          <span  style={{...errorStyle}}>{error}</span>
        )
      }
     

    </div>
  );
}

TextFields.propTypes = {
  disabled: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
export default TextFields;