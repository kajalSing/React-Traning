import React from 'react';
import { OptionSelect } from '../../config/constrants';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Style from './style';

class SelectField extends React.Component{
  render() {
    const { selectOption, handleclick , classes} = this.props;
    return (
          <>
          <p>Select the game to play</p>
          <select
            className={classes.selecttext}
            onChange={handleclick}
            selectOption={selectOption}
          >
            {OptionSelect.map(field => (
              <option>{field.option}
              </option>
            ))}
          </select>
          </>
    )
  }
}

SelectField.propTypes = {
  selectOption: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  handleclick: PropTypes.string.isRequired,
}

export default withStyles(Style) (SelectField);