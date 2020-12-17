import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import Button from '@material-ui/core/Button';

const DeleteButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

export default DeleteButton;