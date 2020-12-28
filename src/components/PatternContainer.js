import React from 'react';

import Grid from '@material-ui/core/Grid';

import Pattern from '../components/Pattern'

const PatternContainer = ({ error, loading, data }) => {
  if (loading || !data) {
    return <p>Loading...</p>
  }

  if (!data.patterns || !data.patterns.records) {
    return <p>{error}</p>
  }

  return (
    <React.Fragment>
      {data.patterns.records.map(( pattern ) => (
        <Grid item xs={12} md={6} lg={3}>
          <Pattern
            key={`${pattern.brand} ${pattern.number}`}
            pattern={pattern}
            />
        </Grid>
      ))}
    </React.Fragment>
  );
}

export default PatternContainer;
