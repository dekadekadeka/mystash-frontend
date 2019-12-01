import React, { useState, useEffect } from 'react';
import Pattern from '../components/Pattern'

const PATTERNS_URL = "http://localhost:3000/patterns"

const Patterns = () => {
    const [loading, setLoading] = useState(true);
    const [patterns, setPatterns] = useState([]);
    // const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(PATTERNS_URL)
        .then(resp => resp.json())
        .then(data => {
            setPatterns(data.patterns);
            setLoading(false);
        })
    }, [])

    return (
        <div className="stash-grid">
            
        </div>
    );
}

export default Patterns;
