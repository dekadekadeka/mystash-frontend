import React, { useState, useEffect } from 'react';
import Pattern from '../components/Pattern'
import Search from '../components/Search'

const PATTERNS_URL = "http://localhost:3000/patterns"

const Patterns = () => {
    const [loading, setLoading] = useState(true);
    const [patterns, setPatterns] = useState([]);
    const [filteredPatterns, setFilteredPatterns] = useState([])
    // const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(PATTERNS_URL)
        .then(resp => resp.json())
        .then(data => {
            setPatterns(data);
            setFilteredPatterns(data);
            setLoading(false);
        })
    }, [])

    const search = searchValue => {
        setLoading(true);
        // setErrorMessage(null);

        let searchResults = patterns;

        if(searchValue){
            console.log(searchValue, "is going", searchResults)
            searchResults = searchResults.filter(p => 
                p.brand.toLowerCase().includes(searchValue.toLowerCase()) || 
                p.number.includes(searchValue))
                setLoading(false);
                console.log(searchResults)
                setFilteredPatterns(searchResults);
            } 
            else {
                console.log(searchValue, "is not going")
                setLoading(false)
            }
        };

    return (
        <div>
            <Search search={search}/>
            {patterns.length === 0 ? 
            <h2>No patterns have matched your search!</h2> :
                <div className="stash-grid">
                {filteredPatterns.map((pattern) => (
                <Pattern key={`${pattern.brand} ${pattern.number}`} pattern={pattern} />))
                }
                </div>
            }
        </div>
    );
}

export default Patterns;
