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

const Yarn = ({ yarn }) => {
  return (
    <Card>
      <CardActionArea>
        {yarn.yarnPic && (
          <CardMedia
            component="img"
            image={`${url}/${yarn.yarnPic}`}
            height="200"
            alt={yarn.name}
          />
        )}
        <CardContent>
            <h2>{yarn.brand} {yarn.name}</h2>
            <h3>{yarn.color} Size: {yarn.size} Lot: {yarn.lot}</h3>
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

export default Yarn;
