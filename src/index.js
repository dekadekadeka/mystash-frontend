import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';
import CustomSnackbarProvider from "./fancycomponents/CustomSnackbarProvider";

import App from './App';
import { UserProvider } from './context'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <UserProvider>
    <ApolloProvider client={client}>
      <CustomSnackbarProvider>
        <Router>
          <App />
        </Router>
      </CustomSnackbarProvider>
    </ApolloProvider>
  </UserProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
