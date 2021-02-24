import { gql } from "apollo-server";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "User" type defines the queryable fields for every user in our data source.

  type User {
    name: String
    uid: String
    email: String
    phone: Int
  }
  input CreateOrderInput {
    user: UserInput
    address: AddressInput
  }
  input UserInput {
    name: String
    uid: String
    email: String
    phone: Int
  }

  type Address {
    city: String
    country: String
    street: String
    zip: String
  }
  input AddressInput {
    city: String
    country: String
    street: String
    zip: String
  }

  type Order {
    title: String
    uid: String
    customer: User
    address: Address
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "users" query returns an array of zero or more user (defined above).
  type Query {
    orders: [Order]
    ordersByCity(city: String): [Order]
    users: [User]
    user(id: String): User
  }
  type Mutation {
    createUpdateOrder(
      uid: String
      title: String
      bookingDate: String
      input: CreateOrderInput
    ): Order
  }
`;

export { typeDefs };
