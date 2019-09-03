import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Styles from './style';


const NoMatch = (props) => {
  const {classes} = props;
  return (
    
    <div className={classes.noMatch}>
      <Typography
        className={classes.title}
        component="h1"
        varient="h1"
      >
        Not Found
      </Typography>
      <Typography >
        Seems this page is not found !!
      </Typography>
    </div>
  )

}

export default withStyles(Styles)(NoMatch); 