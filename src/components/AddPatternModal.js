import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import CreatePatternMutation from '../mutations/CreatePatternMutation.gql';

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

const AddPatternModal = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    brand: '',
    number: '',
  });

  const [createPattern] = useMutation(CreatePatternMutation);

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
        "patternInput": {
          "brand": input.brand,
          "number": input.number,
          // "patternFrontPic": input.patternFrontPic,
          // "patternBackPic": input.patternBackPic,
        }
      }
    })
  }

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleOpen} fullWidth>
        {'Add A Pattern'}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add A Pattern</DialogTitle>
        <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            {'Add a pattern to the myStash database!'}
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
            {'Add Pattern'}
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}

export default AddPatternModal;
