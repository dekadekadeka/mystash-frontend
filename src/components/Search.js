import React, { useCallback } from 'react';
import TextField from '@material-ui/core/TextField';

const Search = ({ handleSearchValue, searchValue }) => {
  const handleChange = useCallback((e) => {
    handleSearchValue(e.target.value);
  }, [handleSearchValue]);

  return (
    <form style={{'textAlign': 'center'}}>
      <TextField
        value={searchValue}
        label="Search Patterns Here"
        onChange={handleChange}
      />
    </form>
  );
}

export default Search;
