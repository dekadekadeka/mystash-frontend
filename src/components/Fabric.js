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

const Fabric = ({ fabric }) => {
  return (
    <Card>
      <CardActionArea>
        {fabric.fabricPic && (
          <CardMedia
            component="img"
            image={`${url}/${fabric.fabricPic}`}
            height="200"
            alt={fabric.name}
          />
        )}
        <CardContent>
          <h2>{fabric.name}</h2>
          <h2>{fabric.fabricType}, {fabric.color}</h2>
          <h3>Amount: {fabric.size}</h3>
          <p>{fabric.description}</p>
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

export default Fabric;
