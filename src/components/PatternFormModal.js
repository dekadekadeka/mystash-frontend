import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import PatternsQuery from '../queries/PatternsQuery.gql';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const PatternFormModal = ({ title, fullWidth, path, mutation, patternId }) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    brand: '',
    number: '',
  });

  const [createPattern, { error }] = useMutation(mutation, {
    refetchQueries: () => [{
      query: PatternsQuery,
      variables: { search: null },
    }],
    onCompleted: () => {
      handleClose();
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevState) => {
      return ({
        ...prevState,
        [name]: value,
      })
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
      createPattern({ variables: {
        "id": patternId,
        "patternInput": {
          "brand": input.brand,
          "number": input.number,
          // "patternFrontPic": input.patternFrontPic,
          // "patternBackPic": input.patternBackPic,
        }
      }
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleOpen} fullWidth={fullWidth}>
        {title}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{`${path === 'add' ? 'Add' : 'Edit'} A Pattern`}</DialogTitle>
        <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            {path === 'add' ? 
              'Add a pattern to the myStash database!' :
              <React.Fragment>
                {'Edit a pattern in case you made a mistake or want to add a pic.'}
                  <br />
                {'Please note this affects the pattern for EVERY user!'}
              </React.Fragment>
            }
          </DialogContentText>
          <FormControl style={{ width: '100%' }}>
            <InputLabel>Pattern Brand</InputLabel>
            <Select
              label="Brand"
              name="brand"
              value={input.brand}
              onChange={handleChange}
            >
              <MenuItem value={"Simplicity"}>Simplicity</MenuItem>
              <MenuItem value={"McCalls"}>McCalls</MenuItem>
              <MenuItem value={"Butterick"}>Butterick</MenuItem>
              <MenuItem value={"Vogue"}>Vogue</MenuItem>
              <MenuItem value={"New Look"}>New Look</MenuItem>
              <MenuItem value={"Burda"}>Burda</MenuItem>
              <MenuItem value={"Kwiksew"}>Kwiksew</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Number"
            error={error}
            helperText={error ? error.message : null}
            name="number"
            fullWidth
            value={input.number}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {'Cancel'}
          </Button>
          <Button type="submit" color="primary">
            {`${path === 'add' ? 'Add' : 'Edit'} Pattern`}
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}

export default PatternFormModal;
