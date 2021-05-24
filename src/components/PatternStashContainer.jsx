import React from 'react';
import Grid from "@material-ui/core/Grid";
import Pattern from "./Pattern";
import CurrentUserPatternsQuery from '../queries/CurrentUserPatternsQuery.gql';
import {useQuery} from "@apollo/client";

const PatternStashContainer = () => {
  const { error, loading, data } = useQuery(CurrentUserPatternsQuery);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error}`;
  return (
    <div>
      <h1>My Patterns</h1>
      <Grid container>
        {data.currentUser.patterns.map((pattern) => (
          <Grid item xs={12} sm={6} lg={3}>
            <Pattern
              key={`${pattern.brand} ${pattern.number}`}
              pattern={pattern}
              path="stash"
              currentUserPatternsQuery={CurrentUserPatternsQuery}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PatternStashContainer;
