import React from 'react';
import { FormHelperText } from '@mui/material';

function Suggestion(props) {

  return <FormHelperText id="my-helper-text"><span style={{color:'red',fontSize:'1.2em',fontFamily: 'Lato'}}>{props.errorMessage}</span></FormHelperText>;

}

export default Suggestion;