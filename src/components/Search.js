import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e) => {
        props.search(e)
        setSearchValue(e);
    }
    
    return (
        <form noValidate autoComplete="off"
        style={{'textAlign': 'center'}}>
            <TextField
                id="pattern-search"
                label="Search Patterns Here"
                value={searchValue}
                onChange={e => handleChange(e.target.value)}
            />
      </form>
    );
}

export default Search;
