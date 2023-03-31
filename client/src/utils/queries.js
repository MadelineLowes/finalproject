// from activity 21.20
import { gql } from '@apollo/client';

export const QUERY_PARTNERS = gql`
query Causes {
  causes {
    _id
    category {
      _id
      name
    }
    contactEmail
    contactName
    description
    headquarters
    name
    userId
    websiteLink
  }
}
`;

export const QUERY_SINGLE_PARTNER = gql`
  
`;
