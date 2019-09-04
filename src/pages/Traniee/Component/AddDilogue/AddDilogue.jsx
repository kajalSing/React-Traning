import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import *as yup from 'yup';
import TextField from '@material-ui/core/TextField';

import Styles from './style';


const fromSchema = yup.object().shape({
  name: yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Name is Required')
    .label('Name'),
  email: yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  password: yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword:  yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
});

function validate(name,email, password, confirmPassword) {
  // true means invalid, so our conditions got reversed
  return {
    name:name.length===0,
    email: email.length === 0,
    password: password.length === 0,
    confirmPassword:confirmPassword.length===0
  };
}

class AddDilogue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
      email:'',
      password:'',
      confirmPassword:'',
      error:'',
      everFocusedEmail: false,
      everFocusedname:false,
      everFocusedPassword: false,
      everFocusedConfirmPassword:false,
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
    const errors = validate(this.state.name,this.state.email, this.state.password,this.state.confirmPassword);
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
    const { name , email, password, confirmPassword } = this.state;
    fromSchema.validate(
      {name , email, password, confirmPassword},
      {abortEarly : false}
    )
      .then(() =>{
        const { error } = this.state;
        console.log('success submitted');
        this.setState({
          error: { ...error, [value]: ''}})
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
    const { name,
      email,
      password,
      error,
      confirmPassword,
    } = this.state;
    const errors = validate(this.state.name,this.state.email, this.state.password,this.state.confirmPassword);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <Grid
        container
        spacing={24}
      >
        <Grid
          className={classes.gridClass}
          item
          xs={12}
        >
          <Dialog
            aria-describedby="alert-dialog-description"
            aria-labelledby="alert-dialog-title"
            classes={{
              paperScrollPaper: classes.paperScrollPaper,
            }}
            onClose={close}
            open="true"
          >
            <DialogTitle
              className={classes.title}
              id="alert-dialog-title"
            >This is form validation</DialogTitle>
            <DialogContent>
              <form
                autoComplete="off"
                className={classes.container}
                noValidate
                onSubmit={this.handleSubmit}
              >
                <TextField
                  className={classes.TextField}
                  label="Name"
                  name={name}
                  onChange={this.handleChange('name')}
                  type="text"
                  // className={errors.name ? classes.errorBorder : ''}
                /><br />
                {error.name ? <div className={classes.error}>{error.name}</div> : ''}

                <TextField
                  className={classes.TextField}
                  email={email}
                  label="Email Address"
                  onChange={this.handleChange('email')}
                  type="email"
                  // className={errors.email ? classes.errorBorder : ''}
                /><br />
                {error.email ? <div className={classes.error}>{error.email}</div> : ''}
                <TextField
                  className={classes.TextField}
                  label="password"
                  onBlur={this.handleChange}
                  onChange={this.handleChange('password')}
                  password={password}
                  type="password"
                  //className={errors.password ? classes.errorBorder : ''}
                /><br />
                {error.password ? <div className={classes.error}>{error.password}</div> : ''}
                <TextField
                  className={classes.TextField}
                  confirmPassword={confirmPassword}
                  label="Confirm password"
                  onChange={this.handleChange('confirmPassword')}
                  // className={errors.confirmPassword ? classes.errorBorder : ''}
                  type="password"
                /><br />
                {error.confirmPassword ? <div className={classes.error}>{error.confirmPassword}</div> : ''}
                <Button
                  className={classes.cancelbutton}
                  component="span"
                  onClick={this.handleClose}
                  variant="contained"
                >
          cancel
                </Button>
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


//https://goshakkk.name/instant-form-fields-validation-react/