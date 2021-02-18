import { gql } from "graphql-request";
const GETORDERBYID = gql`
  query getOrderById($id: String) {
    orderById(id: $id) {
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

export default GETORDERBYID;
