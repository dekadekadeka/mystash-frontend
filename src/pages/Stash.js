import React from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../mutations/SignInUserMutation';

import Pattern from '../components/Pattern'
// import Yarn from '../components/Yarn'
// import Fabric from '../components/Fabric'
// import Notion from '../components/Notion'


const Stash = () => {

  const { loading, error, data } = useQuery(CURRENT_USER);
  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error}`;
  console.log(data)

  return (
    <div>
      {loading ? (<span className="loader">LOADING...</span>) : 
        error ? (<span className="error">AN ERROR HAS OCCURED</span>) : 
          (<React.Fragment>
          <h1>Welcome {data.currentUser.name}!!</h1>
          <h1>My Patterns</h1>
          {data.currentUser.patterns.length === 0 ? 
          <h2>You don't have any patterns! Add some!</h2> :
          <div className="stash-grid">
          {loading ? (<span>loading...</span>) : 
        (data.user.patterns.map((pattern) => (
        <Pattern key={`${pattern.brand} ${pattern.number}`} pattern={pattern} />))
        )
        }
        </div>}
        {/* <h1>My Yarns</h1>
        {state.user.user.yarns.length === 0 ? <h2>You don't have any yarn! Add some!</h2> :
            <div className="stash-grid">
            {state.loading ? (<span>loading...</span>) : 
            (state.user.user.yarns.map((yarn) => (
            <Yarn key={`${yarn.brand} ${yarn.name}`} yarn={yarn} />))
            )}
            </div>
        }
        <h1>My Fabrics</h1>
        {state.user.user.fabrics.length === 0 ? <h2>You don't have any fabric! Add some!</h2> :
            <div className="stash-grid">
            {state.loading ? (<span>loading...</span>) : 
            (state.user.user.fabrics.map((fabric) => (
            <Fabric key={`${fabric.fabric_type} ${fabric.color}`} fabric={fabric} />))
            )}
            </div>
        }
        <h1>My Notions</h1>
        {state.user.user.notions.length === 0 ? <h2>You don't have any notions! Add some!</h2> :
            <div className="stash-grid">
            {(state.user.user.notions.map((notion) => (
            <Notion key={`${notion.brand} ${notion.name}`} notion={notion} />))
            )}
            </div>
        } */}
    </React.Fragment>)}
    </div>
  );
}

export default Stash;
