import React from 'react';
import Stash from '../pages/Stash'
import Login from '../pages/Login'

const Home = () => {
    return (
        <div>
            Welcome to <h1>myStash</h1>, where all your dreams come true!
            {localStorage.token ? <Stash/> : <Login />}
        </div>
    );
}

export default Home;
