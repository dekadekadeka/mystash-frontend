import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { InputBase } from '@material-ui/core';

export default function Navbar() {
        const useStyles = makeStyles(theme => ({
            root: {
              '& > *': {
                margin: theme.spacing(1),
                width: 200,
                color: '#fff',
                fontFamily: 'cabin, sans-serif',
                fontSize: '1.5rem',
            },
            },
        }));
        const classes = useStyles();
        return (
            <div className="navbar">
                <Link to="/list"><h2>Shopping List</h2></Link>
                {/* {this.props.currentUser.username ? */}
                {/* <Link to="/stash"><h1>myStash</h1></Link> : */}
                <Link to="/login"><h1>myStash</h1></Link>
                {/* } */}
                <form className={classes.root} noValidate autoComplete="off">
                <InputBase 
                id="search" 
                className={classes.margin}
                defaultValue="Search Patterns" />
                </form>
            </div>
        );
}

