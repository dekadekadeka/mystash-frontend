import React, { useCallback } from 'react';

import CreatePatternMutation from '../mutations/CreatePatternMutation.gql';

import PatternFormModal from './PatternFormModal';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Search = ({ handleSearchValue }) => {
  const handleChange = useCallback((e) => {
    handleSearchValue(e.target.value);
  }, [handleSearchValue]);

  const handleBrandChange = (e, v) => {
    handleSearchValue(v === null ? "" : v.brand)
  }

  const patternBrands = [
    {brand: "Simplicity", value: "0"},
    {brand: "McCalls", value: "1"},
    {brand: "Butterick", value: "2"},
    {brand: "Vogue", value: "3"},
    {brand: "New Look", value: "4"},
    {brand: "Burda", value: "5"},
    {brand: "Kwiksew", value: "6"},
    {brand: "Other", value: "7"},
  ]

  return (
    <Grid container spacing={4} style={{ margin: '0px 16px' }} alignItems="flex-end">
      <Grid item xs={12} md={4}>
        <Autocomplete
          getOptionLabel={(option) => option.brand}
          getOptionSelected={(option) => option.brand}
          onChange={(e, v) => handleBrandChange(e, v)}
          options={patternBrands}
          renderInput={(params) => <TextField {...params} label="Search By Brand" />}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <PatternFormModal
          title="Add A Pattern"
          fullWidth
          path="add"
          mutation={CreatePatternMutation}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          label="Search By Number"
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
}

export default Search;
