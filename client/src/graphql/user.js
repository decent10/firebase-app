import { gql } from "graphql-request";
const GETUSER = gql`
  query getUserById($id: String) {
    user(id: $id) {
      name
      uid
      email
      phone
    }
  }
`;

export default GETUSER;
