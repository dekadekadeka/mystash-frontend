import React from 'react';
import { SnackbarProvider } from 'notistack';
import { withStyles } from "@material-ui/styles";

import Collapse from '@material-ui/core/Collapse';

const snackbarStyles = {
  error: {
    backgroundColor: 'rgba(0,0,0,0)',
    backgroundImage: 'linear-gradient(to bottom, rgba(197,90,90,0), rgba(197,90,90,1))',
    boxShadow: 'none',
    borderRadius: '50px 50px 0px 0px',
    fontSize: '1.25em',
    justifyContent: 'center',
  },
  root: {
    marginBottom: '-20px',
    minWidth: '90vw',
    textShadow: '2px 2px 5px #000000'
  },
  success: {
    backgroundColor: 'rgba(0,0,0,0)',
    backgroundImage: 'linear-gradient(to bottom, rgba(127,189,127,0), rgba(127,189,127,1))',
    boxShadow: 'none',
    borderRadius: '50px 50px 0px 0px',
    fontSize: '1.25em',
    justifyContent: 'center',
  }
}

const CustomSnackbarProvider = ({ classes, ...props }) => (
  <SnackbarProvider
    hideIconVariant
    classes={{
      root: classes.root,
      variantSuccess: classes.success,
      variantError: classes.error,
    }}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    TransitionComponent={Collapse}
    {...props}
  />
)

export default withStyles(snackbarStyles)(CustomSnackbarProvider);
