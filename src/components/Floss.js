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

const Floss = ({ floss }) => {
  return (
    <Card>
      <CardActionArea>
        {floss.flossPic && (
          <CardMedia
            component="img"
            image={`${url}/${floss.flossPic}`}
            height="200"
            alt={floss.name}
          />
        )}
        <CardContent>
          <h2>{floss.brand}</h2>
          <h3>Amount: {floss.amount}</h3>
          <h3>Color: {floss.color}</h3>
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

export default Floss;