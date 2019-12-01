import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
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

const Notion = ({notion}) => {
    return (
        <Card>
      <CardActionArea>
        <CardContent>
            <h2>{notion.brand} {notion.name}</h2>
            <h3>Size: {notion.size} Color: {notion.color}</h3>
            <p>{Notion.description}</p>
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

export default Notion;