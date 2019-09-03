import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { navigation } from '../../../config/constrants';
import Grid from '@material-ui/core/Grid';

import Styles from './style';
import Login from '../../../pages/Login/Login';


class navigationbar extends React.Component {
  constructor(props) {
    super(props);
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
      <Grid
        className={classes.navwrapper}
        container
        spacing={3}
      >
        <Grid
          item
          xs={5}
        >
          <Typography
            className={classes.h2}
            component="h2"
            varient="h2"
          >
            Trainee Portal
          </Typography>
        </Grid>
        <Grid
          item
          xs={7}
        >
          {navigation.map(field => (
            <Link
              className={classes.listWrap}
              key={field.label}
              to={field.to}
            >
              <Button
                className={classes.list}
                color="primary"
                variant="contained"
              >
                {field.label}
              </Button>
            </Link>
          ))} 

        </Grid>
        {openDialog ? <Login
          close={this.handleClick}
          open={openDialog}
        /> : ''}
      </Grid>
    );
  }
}

navigationbar.propTypes = {
  classes: PropTypes.string.isRequired,
}

export default withStyles(Styles)(navigationbar)