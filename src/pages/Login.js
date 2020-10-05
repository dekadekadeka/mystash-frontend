import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { UserContext } from '../UserProvider';
import { gql, useMutation } from '@apollo/client';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const SIGN_IN_USER = gql`
  mutation SignInUser($input: AuthProviderCredentialsInput!) {
      signinUser(input: $input) {
      user {
        id
        name
      }
      token
    }
  }
`;

const Login = () => {
    const { dispatch } = React.useContext(UserContext);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const [signinUser] = useMutation(SIGN_IN_USER);
  
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
            dispatch({
                type: "LOGIN",
                payload: data
            })
        })
    }
  if (localStorage.token) {
    return <Redirect to="./stash" />;
  }
  return (
    <div className="form-margin">
      <div className="title">
        Welcome to <span className="emphasis">myStash</span>, where all your dreams come true!
      </div>
      <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Username" 
                name='username'
                onChange={e => setUsername(e.target.value)}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
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
