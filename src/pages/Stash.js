import React from 'react';
import { useQuery } from '@apollo/client';
import CurrentUserQuery from '../queries/CurrentUserQuery.gql';

import Fabric from '../components/Fabric'
// import Floss from '../components/Floss'
// import Needle from '../components/Needle'
import Notion from '../components/Notion'
import Pattern from '../components/Pattern'
import Yarn from '../components/Yarn'


const Stash = () => {
  const { loading, error, data } = useQuery(CurrentUserQuery);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error}`;
  const { currentUser } = data;

  return (
    <div className="container">
      <h1>Welcome {currentUser.name}!!</h1>
        {currentUser.patterns.length > 0 && (
          <React.Fragment>
            <h1>My Patterns</h1>
            <div className="stash-grid">
              {currentUser.patterns.map((pattern) => (
              <Pattern key={`${pattern.brand} ${pattern.number}`} pattern={pattern} />))}
            </div>
          </React.Fragment>
        )}
        {currentUser.yarns.length > 0 && (
          <React.Fragment>
            <h1>My Yarns</h1>
            <div className="stash-grid">
              {currentUser.yarns.map((yarn) => (
              <Yarn key={`${yarn.brand} ${yarn.name}`} yarn={yarn} />))}
            </div>
          </React.Fragment>
        )}
        {currentUser.fabrics.length > 0 && (
          <React.Fragment>
            <h1>My Fabrics</h1>
            <div className="stash-grid">
              {currentUser.fabrics.map((fabric) => (
                <Fabric key={`${fabric.fabric_type} ${fabric.color}`} fabric={fabric} />))
              }
            </div>
          </React.Fragment>
        )}
        {currentUser.notions.length > 0 && (
          <React.Fragment>
            <h1>My Notions</h1>
            <div className="stash-grid">
              {currentUser.notions.map((notion) => (
                <Notion key={`${notion.brand} ${notion.name}`} notion={notion} />))
              }
            </div>
          </React.Fragment>
        )}
    </div>
  );
}

export default Stash;
