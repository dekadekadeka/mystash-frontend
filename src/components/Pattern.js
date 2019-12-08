import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import SinglePattern from '../pages/SinglePattern'

//fancy red button
const DeleteButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

//actual function
const Pattern = ({pattern}) => {
    const GENERIC_FRONT = "http://localhost:3000/generic_front.jpg"

    const frontPic = 
    pattern.front_pic === null ? GENERIC_FRONT : pattern.front_pic
    //open full pattern modal
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('body');

    const handleClickOpen = scrollType => () => {
      setOpen(true);
      setScroll(scrollType);
    };

    const handleClose = () => {
      setOpen(false);
      console.log("close me")
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
          image={frontPic}
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
        maxWidth={'xl'}>
        <DialogContent dividers={scroll === 'paper'}>
          <SinglePattern pattern={pattern} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
        <DeleteButton size="small" color="primary" className={DeleteButton.root}>
          Delete
        </DeleteButton>
      </CardActions>
    </Card>
    );
}

export default Pattern;
