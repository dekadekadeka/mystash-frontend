import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { createCache, createClient } from '../src/apollo';

export default ({ children }) => (
  <ApolloProvider client={createClient(createCache())}>
    {children}
  </ApolloProvider>
);
