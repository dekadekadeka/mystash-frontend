import React, { useState, useEffect } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Pattern from '../components/Pattern'
import Search from '../components/Search'

// TODO: Query from GraphQL instead!
// const PATTERNS_URL = "http://localhost:3000/patterns"
const PatternsQuery = gql`
  {
    patterns {
      id
      brand
      number
    }
  }
`;

const Patterns = () => {
    // const [baseline, setBaseline] = useState(true);
    // const [patterns, setPatterns] = useState([]);
    // const [filteredPatterns, setFilteredPatterns] = useState([])

    // useEffect(() => {
    //     fetch(PATTERNS_URL)
    //     .then(resp => resp.json())
    //     .then(data => {
    //         setPatterns(data);
    //         setFilteredPatterns(data);
    //         setBaseline(false);
    //     })
    // }, [])

    // const search = searchValue => {
    //     setBaseline(true);

    //     let searchResults = patterns;

    //     if(searchValue){
    //         searchResults = searchResults.filter(p => 
    //             p.brand.toLowerCase().includes(searchValue.toLowerCase()) || 
    //             p.number.includes(searchValue))
    //             setBaseline(false);
    //             setFilteredPatterns(searchResults);
    //         }
    //     };

    return (
      <Query query={PatternsQuery}>
        {({ data, loading }) => (
          <div>
            {loading
              ? 'loading...'
              : data.patterns.map(({ brand, id, number }) => (
                  <div key={id}>
                    <b>{brand}</b> <p>{number}</p>
                  </div>
                ))}
          </div>
        )}
      </Query>
        // <div>
        //     <Search search={search}/>
        //     {filteredPatterns.length === 0 ? 
        //     <h2>No patterns have matched your search!</h2> :
        //         <div className="stash-grid">
        //         {baseline ? 
        //         (patterns.map((pattern) => (
        //             <Pattern key={`${pattern.brand} ${pattern.number}`} pattern={pattern} />))
        //         ) : 
        //         (filteredPatterns.map((pattern) => (
        //         <Pattern key={`${pattern.brand} ${pattern.number}`} pattern={pattern} />))
        //         )}
        //         </div>
        //     }
        // </div>
    );
}

export default Patterns;
