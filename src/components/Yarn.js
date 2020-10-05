import React from 'react';
import { config } from '../../src/constants';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const url = config.url.apiUrl;

const DeleteButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

const Yarn = ({yarn}) => {
    const GENERIC_FRONT = `${url}/generic_yarn.jpg`

    const pic = 
    yarn.pic === null ? GENERIC_FRONT : yarn.pic

    return (
        <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={pic}
          height="200"
          alt={yarn.name}
        />
        <CardContent>
            <h2>{yarn.brand} {yarn.name}</h2>
            <h3>{yarn.color} Size: {yarn.size} Lot: {yarn.lot}</h3>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <DeleteButton size="small" color="primary" className={DeleteButton.root}>
          Delete
        </DeleteButton>
      </CardActions>
    </Card>
    );
}

export default Yarn;
