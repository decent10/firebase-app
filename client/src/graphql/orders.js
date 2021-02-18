import { gql } from "graphql-request";
const GETORDERS = gql`
  query getOrders {
    orders {
      title
      uid
      bookingDate
      customer {
        name
        email
        uid
        phone
      }
      address {
        street
        zip
        city
        country
      }
    }
  }
`;

export default GETORDERS;
