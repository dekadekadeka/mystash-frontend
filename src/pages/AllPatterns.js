import React, { useCallback, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import Grid from '@material-ui/core/Grid';

import Search from '../components/Search'
import PatternContainer from '../components/PatternContainer';

const PatternsQuery = gql`
  query Patterns($search: SearchInput) {
    patterns(search: $search) {
      __typename
      count
      records {
        __typename
        id
        brand
        number
        patternBackPic
        patternFrontPic
      }
    }
  }
`;

const Patterns = () => {
  const [searchValue, setSearchValue] = useState(null);

  const handleSearchValue = useCallback((term) => {
    setSearchValue(term);
  }, [setSearchValue]);

  const searchInput = {};
  if (searchValue) {
    searchInput.searchTerm = searchValue[0].toUpperCase() + searchValue.substr(1);
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
        <Grid item xs={12}>
          <Search handleSearchValue={handleSearchValue} searchValue={searchValue} />
        </Grid>
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
