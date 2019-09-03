import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Styles from './style';
import AddDilogue from '../Traniee/Component/AddDilogue';


class Traniee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openDialog: false,
    }
  }

  handleClick = () => {
    this.setState(preState => (
      {
        openDialog: !preState.openDialog,
      }))
  }

  render() {
    const { classes } = this.props;
    const { openDialog } = this.state;
    console.log(openDialog)
    return (
      <div className={classes.headerwrapper}>
        <Button
          className={classes.button}
          color="primary"
          onClick={this.handleClick}
          variant="outlined"
        >
              Add Trainee
        </Button>

        {openDialog ? <AddDilogue
          close={this.handleClick}
          open={openDialog}
        /> : ''}
      </div>
    )
  }
}

Traniee.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(Styles)(Traniee);
