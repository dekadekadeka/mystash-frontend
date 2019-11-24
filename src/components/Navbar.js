import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            {/* {this.props.currentUser.username ? */}
            {/* <Link to="/stash"><h1>myStash</h1></Link> : */}
            <Link to="/login"><h1>myStash</h1></Link>
            {/* } */}
        </div>
    );
}

export default Navbar;
