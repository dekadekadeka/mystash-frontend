import { ApolloClient, InMemoryCache } from '@apollo/client';
import { config } from '../src/constants';

const url = config.url.apiUrl;

export const client = new ApolloClient({
  uri: `${url}/graphql`,
  cache: new InMemoryCache()
});
