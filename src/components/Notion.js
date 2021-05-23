import React from 'react';
import { config } from '../../src/constants';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button'
import DeleteButton from '../fancycomponents/DeleteButton';

const url = config.url.apiUrl;

const Notion = ({ notion }) => {
  return (
    <Card className="notion-card">
      <CardActionArea>
        {notion.notionPic && (
            <CardMedia
              component="img"
              image={`${url}/${notion.notionPic}`}
              height="200"
              alt={notion.name}
            />
          )}
        <CardContent>
          <h2>{notion.brand} {notion.name}</h2>
          <h3>Size: {notion.size}</h3>
          <h3> Color: {notion.color}</h3>
          <p>{notion.description}</p>
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