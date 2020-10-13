import { ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache } from '@apollo/client';
import { config } from '../src/constants';

const url = config.url.apiUrl;

let appJWTToken = localStorage.getItem("token");
  const httpLink = new HttpLink({uri: `${url}/graphql`})
  const authMiddleware = new ApolloLink((operation, forward)=> {
    if (appJWTToken) {
      operation.setContext({
        headers: {
          Authorization: `Bearer ${appJWTToken}`
        }
      });
    } 
  return forward(operation);
})

export const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
});
