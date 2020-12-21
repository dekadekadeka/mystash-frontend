import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { loginUser, useAuthState, useAuthDispatch } from '../context';
import { useMutation } from '@apollo/client';
import SignInUserMutation from '../mutations/SignInUserMutation.gql';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const Login = () => {
    const dispatch = useAuthDispatch();
    const { loading, errorMessage } = useAuthState();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const [signinUser] = useMutation(SignInUserMutation);
  
    const handleSubmit = e => {
      e.preventDefault();
        signinUser({ variables: {
          "input": {
            "username": username,
            "password": password,
          }
        }
      })
      .then(data => {
        loginUser(dispatch, data)
        })
    }
  if (localStorage.token && !loading) {
    return <Redirect to="./stash" />;
  }

  return (
    <div className="container">
      <div className="title">
        Welcome to <span className="emphasis">myStash</span>, where all your dreams come true!
      </div>
      <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <TextField
                error={errorMessage}
                helperText={errorMessage ? errorMessage : null}
                label="Username" 
                name='username'
                onChange={e => setUsername(e.target.value)}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                error={errorMessage}
                label="Password" 
                type="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid container justify="center">
              <Button
                type="submit"
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
    </div>
  );
}

export default Login;
