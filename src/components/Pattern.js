import React from 'react';
import { config } from '../../src/constants';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import DeleteButton from '../fancycomponents/DeleteButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import SinglePattern from '../pages/SinglePattern'

const url = config.url.apiUrl;

//actual function
const Pattern = ({ pattern }) => {
    //open full pattern modal
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('body');

    const handleClickOpen = scrollType => () => {
      setOpen(true);
      setScroll(scrollType);
    };

    const handleClose = () => {
      setOpen(false);
    }

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);
    //add to stash function
    //delete from stash function
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`${url}/${pattern.patternFrontPic}`}
            height="400"
            alt={pattern.number}
          />
          <CardContent>
            <h2>{pattern.brand} {pattern.number}</h2>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleClickOpen('body')}>
            View Full
          </Button>
          <Button size="small" color="primary">
            Add
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            maxWidth={'xl'}
          >
          <DialogContent dividers={scroll === 'paper'}>
            <SinglePattern pattern={pattern} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <DeleteButton size="small">
          Delete
        </DeleteButton>
      </CardActions>
    </Card>
    );
}

export default Pattern;
