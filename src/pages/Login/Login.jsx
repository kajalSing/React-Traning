import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import LockIcon from '@material-ui/icons/Lock';
import *as yup from 'yup';

import Styles from './style';


const loginSchema = yup.object().shape({
  email: yup.string()
    .email('Email is invalid')
    .required('Email is required'),
    password: yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

function validate(email, password) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0,
    password: password.length === 0,
  };
}

class AddDilogue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email:'',
      password:'',
      error:'',
      everFocusedEmail: false,
      everFocusedPassword: false,
      inFocus: ''
    }
  }
  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  };

  canBeSubmitted() {
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }
  handleChange = field => (event) =>  {
    this.setState({[field]: event.target.value}, 
      () => this.handleValidate((field)));
  }


  handleClose = () => {
    const { close } = this.props;
    close();
  }

  handleValidate = (value) => {
    const { email, password } = this.state;
    loginSchema.validate(
      { email, password},
      {abortEarly : false}
    )
      .then(() =>{
        const { error } = this.state;
        console.log('success submitted');
        this.setState({
          error: { ...error, [value]: ''}});
        console.log(error.email);
      })
      .catch((error) => {
        error.inner.forEach((errors) => {
          if (errors.path === value) {
            this.setState({
              error: { ...error, [value]: errors.message },
            });
          }
        })
        if (!(error.inner.some(error => error.path === value))) {
          this.setState({
            error: { ...error, [value]: '' },
          });
        }
      });
  }

  render() {
    const { open, close, classes } = this.props;
    const { 
      email,
      error,
      password
    } = this.state;
    const errors = validate(this.state.email, this.state.password);
    const isEnabled = email.length > 0 && password.length > 0;
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <Grid
        container
        spacing={24}
      >
        <Grid
          alignItems="center"
          className={classes.gridClass}
          direction="row"
          item
          justify="center"
          xs={12}
        >
          <Dialog
            aria-describedby="alert-dialog-description"
            aria-labelledby="alert-dialog-title"
            classes={{
              paperScrollPaper: classes.paperScrollPaper,
            }}
            onClose={close}
            open='true'
          >
            <DialogTitle
              className={classes.title}
              id="alert-dialog-title"
            >
              <LockIcon />
              <h4 
                className={classes.h4}
              >  Login </h4>
            </DialogTitle>
            <DialogContent>
              <form
                autoComplete="off"
                className={classes.container}
                noValidate
                onSubmit={this.handleSubmit}
              >
                <TextField
                  className={classes.textField}
                  label="Enter your email"
                  type="email"
                  email={email}
                  onChange={this.handleChange('email')}
                />
                {error.email ? <div className={classes.error}>{error.email}</div> : ''}
                <TextField
                  className={classes.textField}
                  label="Enter your password"
                  type="password"
                  password={password}
                  onChange={this.handleChange('password')}
                />
                {error.password ? <div className={classes.error}>{error.password}</div> : ''}
                <Button
                  className={classes.button}
                  component="span"
                  disabled={isDisabled}
                  variant="contained"
                  
                >
                  Submit
                </Button>

              </form>
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
    );
  }
}


export default withStyles(Styles)(AddDilogue);
