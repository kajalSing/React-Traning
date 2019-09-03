import React from 'react';
import TextFields from '../../Components/TextField/TextFields';
import { withStyles } from '@material-ui/core/styles';
import Slider from '../../Components/Slider/Slider';

import Styles from './style';



class TextFieldDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOption: '',
      footballOption: '',
      cricketOption: ''
    }
  }
  handleclick = (event) => {
    this.setState({
      selectOption: event.target.value,
      cricketOption: event.target.value,
      footballOption: event.target.value
    });
  }

  render() {

    const { selectOption, cricketOption, footballOption } = this.state;
    console.log({ 'selectOption': selectOption, 'footballOption': footballOption, 'cricketOption': cricketOption, });

    return (
      <>
        <div>
          <p></p>
          <Slider />
          <TextFields
            disabled
            error="this is error"
            value="Name"
          />
        </div>
      </>

    );
  }
}


export default withStyles(Styles)(TextFieldDemo);