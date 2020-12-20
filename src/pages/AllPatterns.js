import React, { useCallback, useState } from 'react';
import { useQuery } from '@apollo/client';

import PatternsQuery from '../queries/PatternsQuery.gql';

import Grid from '@material-ui/core/Grid';
import PatternContainer from '../components/PatternContainer';
import Search from '../components/Search'

const Patterns = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValue = useCallback((term) => {
    setSearchValue(term);
  }, [setSearchValue]);

  const searchInput = {};
  if (searchValue) {
    searchInput.searchTerm = searchValue;
  }

  const variables = {
    search: searchInput,
  };

  const { loading, error, data } = useQuery(PatternsQuery, {
    variables: variables,
  });

  return (
    <div className="container">
      <Grid container spacing={3}>
        <Search handleSearchValue={handleSearchValue} searchValue={searchValue} />
        <PatternContainer
          error={error}
          loading={loading}
          data={data}
        />
      </Grid>
    </div>
  )
}

export default Patterns;
