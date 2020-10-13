import { gql } from '@apollo/client';

export const CURRENT_USER = gql`
  {
    currentUser{
      __typename
      id
      name
      patterns {
        __typename
        id
        brand
      }
    }
  }
`;

export const SIGN_IN_USER = gql`
  mutation SignInUser($input: AuthProviderCredentialsInput!) {
      signinUser(input: $input) {
      user {
        __typename
        id
        name
      }
      token
    }
  }
`;