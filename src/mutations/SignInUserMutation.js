import { gql } from '@apollo/client';

export const SIGN_IN_USER = gql`
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