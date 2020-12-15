import { gql } from '@apollo/client';

export const CURRENT_USER = gql`
  query CurrentUser {
    currentUser{
      __typename
      id
      name
      fabrics {
        __typename
        id
        fabricType
        color
        size
        description
        name
        pic
      }
      flosses {
        __typename
        id
        brand
        color
        amount
      }
      needles {
        __typename
        id
        needleType
        size
      }
      notions {
        __typename
        id
        name
        brand
        size
        description
        color
      }
      patterns {
        __typename
        id
        brand
        number
        patternFrontPic
      }
      yarns {
        __typename
        id
        pic
        brand
        name
        lot
        color
        size
      }
    }
  }
`;