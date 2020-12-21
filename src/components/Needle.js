import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button'
import DeleteButton from '../fancycomponents/DeleteButton';

const Needle = ({ needle }) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <h2>{needle.needleType}, size {needle.size}</h2>
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

export default Needle;