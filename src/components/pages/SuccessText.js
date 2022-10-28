import React from 'react';
import { FormHelperText } from '@mui/material';

function SuccessText(props) {

  return <FormHelperText id="my-helper-text"><span style={{color:'green',fontSize:'2em',fontFamily: 'Lato'}}>{props.errorMessage}</span></FormHelperText>;

}

export default SuccessText;