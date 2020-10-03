import React from 'react';
import { Redirect } from 'react-router-dom'
import { UserContext } from '../UserProvider';
import { config } from '../../src/constants';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const url = config.url.apiUrl;

const Login = () => {
    // const { dispatch } = React.useContext(UserContext);
    const initialState = {
        username: "",
        password: "",
        isSubmitting: false,
        errorMessage: null
    }

    const [data, setData] = React.useState(initialState);

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        });
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "user": {
                username: data.username,
                password: data.password
                }
            })
        })
        .then(resp => {
            if(resp.ok){
                return resp.json()
            }
            throw resp;
        })
        // .then(respJson => {
        //     dispatch({
        //         type: "LOGIN",
        //         payload: respJson
        //     })
        // })
        .catch(error => {
            setData({
                ...data,
                isSubmitting: false,
                errorMessage: error.statusText
            })
        })
    }

    if (data.isSubmitting) {
        return <Redirect to="./stash" />;
    }

    return (
        <div className="form-margin">
        <div className="flexGrow: 1">
        Welcome to <h1>myStash</h1>, where all your dreams come true!
        <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
            {!data.errorMessage ?
            (<TextField label="Username" 
            name='username'
            value={data.username}
            onChange={handleChange}
            fullWidth
            margin="normal"/>) :
            (<TextField label="Username" 
            error
            name='username'
            value={data.username}
            onChange={handleChange}
            fullWidth
            margin="normal"/>)}
        </Grid>
        <Grid item xs={12} md={6}>
        {!data.errorMessage ?
            (<TextField label="Password" 
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            fullWidth
            margin="normal"/>) :
            (<TextField label="Password" 
            error
            name='password'
            type="password"
            value={data.password}
            onChange={handleChange}
            fullWidth
            margin="normal"/>)
        }
            </Grid>
            <Grid container justify="center">
                <Button
                input type="submit"
                disabled={data.isSubmitting}>
                    {data.isSubmitting ? "Loading..." : "Login" }
                </Button>
            </Grid>
        </Grid>
        </form>
    </div>
    </div>
    );
}

export default Login;
