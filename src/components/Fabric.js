import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button'
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


const Fabric = ({fabric}) => {
    const GENERIC_FRONT = "http://localhost:3000/generic_fabric.jpg"

    const pic = 
    fabric.pic === null ? GENERIC_FRONT : fabric.pic

    return (
        <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={pic}
          height="200"
          alt={fabric.name}
        />
        <CardContent>
            <h2>{fabric.name}</h2>
            <h2>{fabric.fabric_type}, {fabric.color}</h2>
            <h3>Amount: {fabric.size}</h3>
            <p>{fabric.description}</p>
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

export default Fabric;
