import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const DeleteButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

const Pattern = ({pattern}) => {

    const GENERIC_FRONT = "http://localhost:3000/generic_front.jpg"

    const frontPic = 
    pattern.front_pic === null ? GENERIC_FRONT : pattern.front_pic

    return (
        <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={frontPic}
          height="400"
          alt={pattern.number}
        />
        <CardContent>
            <h2>{pattern.brand} {pattern.number}</h2>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Full
        </Button>
        <Button size="small" color="primary">
          Add
        </Button>
        <DeleteButton size="small" color="primary" className={DeleteButton.root}>
          Delete
        </DeleteButton>
      </CardActions>
    </Card>
    );
}

export default Pattern;
