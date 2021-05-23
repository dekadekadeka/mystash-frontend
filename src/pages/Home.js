import React from 'react';
import Stash from '../pages/Stash'
import Login from '../pages/Login'

const Home = () => {
    return (
        <div>
            {localStorage.token ? <Stash/> : <Login />}
        </div>
    );
}

export default Home;
