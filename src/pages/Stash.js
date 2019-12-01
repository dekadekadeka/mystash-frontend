import React, { useState, useEffect } from 'react';
import Pattern from '../components/Pattern'
import Yarn from '../components/Yarn'
import Fabric from '../components/Fabric'
import Notion from '../components/Notion'

const STASH_URL = "http://localhost:3000/users/1"

const Stash = () => {
    const [loading, setLoading] = useState(true);
    const [patterns, setPatterns] = useState([]);
    const [yarns, setYarns] = useState([]);
    const [fabrics, setFabrics] = useState([]);
    const [notions, setNotions] = useState([]);
    // const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(STASH_URL)
        .then(resp => resp.json())
        .then(data => {
            setPatterns(data.patterns);
            setYarns(data.yarns);
            setFabrics(data.fabrics);
            setNotions(data.notions);
            setLoading(false);
        })
    }, [])

    return (
        <div>
            <h1>My Patterns</h1>
            {patterns.length === 0 ? 
            <h2>You don't have any patterns! Add some!</h2> :
                <div className="stash-grid">
                {loading ? (<span>loading...</span>) : 
                (patterns.map((pattern) => (
                <Pattern key={`${pattern.brand} ${pattern.number}`} pattern={pattern} />))
                )}
                </div>
            }
            <h1>My Yarns</h1>
            {yarns.length === 0 ? <h2>You don't have any yarn! Add some!</h2> :
                <div className="stash-grid">
                {loading ? (<span>loading...</span>) : 
                (yarns.map((yarn) => (
                <Yarn key={`${yarn.brand} ${yarn.name}`} yarn={yarn} />))
                )}
                </div>
            }
            <h1>My Fabrics</h1>
            {fabrics.length === 0 ? <h2>You don't have any fabric! Add some!</h2> :
                <div className="stash-grid">
                {loading ? (<span>loading...</span>) : 
                (fabrics.map((fabric) => (
                <Fabric key={`${fabric.fabric_type} ${fabric.color}`} fabric={fabric} />))
                )}
                </div>
            }
            <h1>My Notions</h1>
            {yarns.length === 0 ? <h2>You don't have any notions! Add some!</h2> :
                <div className="stash-grid">
                {(notions.map((notion) => (
                <Notion key={`${notion.brand} ${notion.name}`} notion={notion} />))
                )}
                </div>
            }
        </div>
    );
}

export default Stash;
