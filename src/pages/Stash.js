import React, { useState, useEffect } from 'react';
import { UserContext } from '../UserProvider'
import Pattern from '../components/Pattern'
import Yarn from '../components/Yarn'
import Fabric from '../components/Fabric'
import Notion from '../components/Notion'

const initialState = {
    user: {},
    loading: false,
    hasError: false,
};

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_STASH_REQUEST':
            return{
                ...state,
                loading: true,
                hasError: false
            };
        case 'FETCH_STASH_SUCCESS':
            return{
                ...state,
                loading: false,
                user: action.payload
            };
        case 'FETCH_STASH_FAILURE':
            return{
                ...state,
                loading: false,
                hasError: true
            };
        default:
            return state;
    }
}

const Stash = () => {
    const { state: userState } = React.useContext(UserContext)
    const [state, dispatch] = React.useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({
            type: 'FETCH_STASH_REQUEST'
        });
        fetch(`http://localhost:3000/init-state`, {
            headers:{
                Authorization: `Bearer ${localStorage.token}`
            }
        })
        .then(resp =>{
            if(resp.ok){
                return resp.json();
            } else {
                throw resp;
            }
        })
        .then(data => {
            console.log(data);
            dispatch({
                type: 'FETCH_STASH_SUCCESS',
                payload: data
            });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: 'FETCH_STASH_FAILURE'
            })
        })
    }, [userState.token])
console.log(state)
    // const [loading, setLoading] = useState(true);
    // const [patterns, setPatterns] = useState([]);
    // const [yarns, setYarns] = useState([]);
    // const [fabrics, setFabrics] = useState([]);
    // const [notions, setNotions] = useState([]);
    // const [errorMessage, setErrorMessage] = useState(null);

    // useEffect(() => {
    //     fetch(STASH_URL)
    //     .then(resp => resp.json())
    //     .then(data => {
    //         setPatterns(data.patterns);
    //         setYarns(data.yarns);
    //         setFabrics(data.fabrics);
    //         setNotions(data.notions);
    //         setLoading(false);
    //     })
    // }, [])

    return (
        <div>
            <h1>My Patterns</h1>
            {/* {state.user.patterns.length === 0 ? 
            <h2>You don't have any patterns! Add some!</h2> :
                <div className="stash-grid">
                {state.loading ? (<span>loading...</span>) : 
                (state.user.patterns.map((pattern) => (
                <Pattern key={`${pattern.brand} ${pattern.number}`} pattern={pattern} />))
                )}
                </div>
            } */}
            {/* <h1>My Yarns</h1>
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
            } */}
        </div>
    );
}

export default Stash;
