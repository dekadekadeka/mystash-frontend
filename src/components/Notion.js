import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button'
import DeleteButton from '../fancycomponents/DeleteButton';

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
        <DeleteButton size="small">
          Delete
        </DeleteButton>
      </CardActions>
    </Card>
    );
}

export default Notion;