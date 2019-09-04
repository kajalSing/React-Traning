import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import *as yup from 'yup';

import Style from './style';
import SelectField from '../../Components/SelectField/SelectField';
import RadioButtonGroup from '../../Components/RadioButton/RadioButton';

const userSchema = yup.object().shape({
  name: yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Name is Required')
    .label('Name'),
  selectfield: yup.string()
});

class TextFieldInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      // disableSave:true,
      selectOption:'',
      footballOption:'',
      cricketOption:'',
      error:{
        name:'',
        selectfield:'',
        radiofield:'',
      },
      isTouched :{
        name:false,
        selectfield:false,
        radiofield:false,
      }
    };   
  }  
  // isError=(val)=>{
  //   const{error} = this.state;
  //   if(name === '')
  //   {
  //     error.name=val;
  //     this.setState({error});
  //   }
   
  //   console.log('hello');
  // }
  //error.name="sjdhkjsa"
   
  handleclick = (event) => {
    this.setState({
      selectOption:event.target.value,
      cricketOption:event.target.value,
      footballOption:event.target.value,
    });
  }
  // handleName=()=>{

  // }

  handleChange = field => (event) =>  {
    if((event.target.value).length > 2 || (event.target.value).length <= 10 ) {
      this.setState({name: null})
    }
    this.setState({[field]: event.target.value}, 
      () => this.handleValidate((field)));
  }
  handleFocus = () => {
    this.setState({disableSave:false});
  }
  handleValidate = (value) => {
    const { name , selectfield, radiofield } = this.state;
    userSchema.validate(
      {name , selectfield, radiofield},
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
      });
  }
  // handleBlur = () =>{
  //   this.handleValidate();
  //   console.log('this field is required');
  // }
  render () {
    const { classes } = this.props;
    const { name,
      disableSave,
      error,
      selectOption,
      cricketOption,
      footballOption,
    } = this.state;
    console.log({ 'name':name ,'selectOption': selectOption, 'footballOption':footballOption,  'cricketOption':cricketOption, });
    return (
      <div className={classes.fromValiadation}>
        <label>Name: </label>
        <input 
          className={classes.inputField}
          name={name}
          onBlur={this.handleBlur}
          onChange={this.handleChange('name')}
          onFocus ={this.handleFocus}
          type="text"
        /><br />
    
        {error.name ? <div className={classes.error}>{error.name}</div> : ''}
        <SelectField 
          className={classes.selecttext}
          handleclick={this.handleclick}
          onChange={this.handleChange('selectfield')}
          onFocus ={this.handleFocus}
          selectOption={selectOption}

        />
        <RadioButtonGroup
          cricketOption={cricketOption}
          footballOption={footballOption}
          handleclick={this.handleclick}
          onChange={this.handleChange('radiofield')}
          onFocus ={this.handleFocus}
          selectOption={selectOption}

        />
        <button
          className = {classes.button}
          disabled={disableSave}
          onClick={this.handleValidate}
          type="submit"
        >
    submit
        </button>
      </div>
    );
  }
}

TextFieldInput.propTypes = {
  name: PropTypes.string.isRequired,
}


export default withStyles(Style)(TextFieldInput);

//https://jaredpalmer.com/formik/docs/guides/validation
