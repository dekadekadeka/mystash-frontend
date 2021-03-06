import React from 'react';
import { config } from '../constants';
import { useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';

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

import AddToStashMutation from '../mutations/AddToStashMutation.gql';
import DeleteFromStashMutation from '../mutations/DeleteFromStashMutation.gql';
import UpdatePatternMutation from '../mutations/UpdatePatternMutation.gql';

import PatternFormModal from './PatternFormModal';
import SinglePattern from '../pages/SinglePattern'

const url = config.url.apiUrl;

const Pattern = ({ currentUserPatternsQuery, path, pattern }) => {
    // open full pattern modal
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('body');

    // snackbar operations
    const { enqueueSnackbar } = useSnackbar();

    // mutations
    const [addToStash] = useMutation(AddToStashMutation);
    const [deleteFromStash] = useMutation(DeleteFromStashMutation, {
      refetchQueries: () => [{
        query: currentUserPatternsQuery,
        variables: { search: null },
      }],
    });

    const handleClickOpen = scrollType => () => {
      setOpen(true);
      setScroll(scrollType);
    };

    const handleClose = () => {
      setOpen(false);
    }

    //add to stash function
    const handleAdd = () => {
      addToStash({
        variables: {
          "patternId": pattern.id,
        }
       }).then(() => {
        enqueueSnackbar(<p style={{bottom: '5%', left: '43%', position: 'absolute'}}>Pattern added successfully!</p>, {
          variant: 'success',
          preventDuplicate: true,
        })
      }).catch(() => {
        enqueueSnackbar('Sorry, there was an error!', {
          variant: 'error',
        })
      });
    }

    //delete from stash function
    const handleDelete = () => {
      deleteFromStash({ variables : {
        "patternId": pattern.id,
      }}).then(() => {
        enqueueSnackbar(<p style={{bottom: '5%', left: '43%', position: 'absolute'}}>Pattern deleted successfully!</p>, {
          variant: 'error',
          preventDuplicate: true,
        })
      }).catch(() => {
        enqueueSnackbar('Sorry, there was an error!', {
          variant: 'error',
        })
      });
    }

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
            {'View Full'}
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
              {'Close'}
            </Button>
          </DialogActions>
        </Dialog>
        {path === "stash" ?
          <React.Fragment>
            <PatternFormModal
              title="Edit Pattern"
              mutation={UpdatePatternMutation}
              patternId={pattern.id}
            />
            <DeleteButton
              size="small"
              onClick={() => handleDelete()}
            >
              {'Delete'}
            </DeleteButton>
          </React.Fragment> :
          <Button
            size="small"
            color="primary"
            onClick={() => handleAdd()}
          >
            {'Add To Stash'}
          </Button>
        }
      </CardActions>
    </Card>
    );
}

export default Pattern;
