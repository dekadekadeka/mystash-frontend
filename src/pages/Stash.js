import React from 'react';
import { useQuery } from '@apollo/client';
import CurrentUserQuery from '../queries/CurrentUserQuery.gql';

import Grid from '@material-ui/core/Grid';

import Fabric from '../components/Fabric'
import Floss from '../components/Floss'
import Needle from '../components/Needle'
import Notion from '../components/Notion'
import Yarn from '../components/Yarn'
import PatternStashContainer from "../components/PatternStashContainer";


const Stash = () => {
  const {loading, error, data} = useQuery(CurrentUserQuery);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error}`;
  const {currentUser} = data;

  return (
      <div className="container">
        <h1>Welcome {currentUser.name}!!</h1>
        {currentUser.patternsCount > 0 && (
            <PatternStashContainer/>
        )}
        {currentUser.yarns.length > 0 && (
            <React.Fragment>
              <h1>My Yarns</h1>
              <Grid container spacing={3}>
                {currentUser.yarns.map((yarn) => (
                    <Grid item xs={12} sm={6} lg={3}>
                      <Yarn key={`${yarn.brand} ${yarn.name}`} yarn={yarn}/>
                    </Grid>
                ))}
              </Grid>
            </React.Fragment>
        )}
        {currentUser.fabrics.length > 0 && (
            <React.Fragment>
              <h1>My Fabrics</h1>
              <Grid container spacing={3}>
                {currentUser.fabrics.map((fabric) => (
                    <Grid item xs={12} sm={6} lg={3}>
                      <Fabric key={`${fabric.fabricType} ${fabric.color}`} fabric={fabric}/>
                    </Grid>
                ))}
              </Grid>
            </React.Fragment>
        )}
        {currentUser.notions.length > 0 && (
            <React.Fragment>
              <h1>My Notions</h1>
              <Grid container spacing={3}>
                {currentUser.notions.map((notion) => (
                    <Grid item xs={12} sm={6} lg={2}>
                      <Notion key={`${notion.brand} ${notion.name}`} notion={notion}/>
                    </Grid>
                ))}
              </Grid>
            </React.Fragment>
        )}
        {currentUser.flosses.length > 0 && (
            <React.Fragment>
              <h1>My Flosses/Threads</h1>
              <Grid container spacing={3}>
                {currentUser.flosses.map((floss) => (
                    <Grid item xs={12} sm={6} lg={2}>
                      <Floss key={`${floss.brand}`} floss={floss}/>
                    </Grid>
                ))}
              </Grid>
            </React.Fragment>
        )}
        {currentUser.needles.length > 0 && (
            <React.Fragment>
              <h1>My Needles</h1>
              <Grid container spacing={3}>
                {currentUser.needles.map((needle) => (
                    <Grid item xs={12} sm={6} lg={2}>
                      <Needle key={`${needle.needleType}`} needle={needle}/>
                    </Grid>
                ))}
              </Grid>
            </React.Fragment>
        )}
      </div>
  );
}

export default Stash;
