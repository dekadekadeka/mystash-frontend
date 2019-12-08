import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
        return (
            <div className="navbar">
                <Link to="/list"><h2>Shopping List</h2></Link>
                <Link to="/"><h1>myStash</h1></Link>
                <Link to="/patterns"><h2>All Patterns</h2></Link>
            </div>
        );
}

