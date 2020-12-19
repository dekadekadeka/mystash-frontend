import React, { useCallback } from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const Search = ({ handleSearchValue, searchValue }) => {
  const handleChange = useCallback((e) => {
    handleSearchValue(e.target.value);
  }, [handleSearchValue]);

  const handleBrandChange = (e, v) => {
    handleSearchValue(v.value)
    console.log(e, v);
  }

  const patternBrands = [
    {brand: "All Brands", value: null},
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
    <form style={{'textAlign': 'center'}}>
      <Autocomplete
        options={patternBrands}
        getOptionLabel={(option) => option.brand}
        onChange={(e, v) => handleBrandChange(e, v)}
        renderInput={(params) => <TextField {...params} label="Search By Brand" variant="outlined" />}
        style={{ width: 300 }}
      />
      <TextField
        value={searchValue}
        label="Search By Number"
        onChange={handleChange}
      />
    </form>
  );
}

export default Search;
