import { GraphQLClient } from "graphql-request";

const endpoint = "http://localhost:4000";

const graphQLClient = new GraphQLClient(endpoint, {});

const request = async (query, variables = {}, options = {}) =>
  await graphQLClient.request(query, variables, options);

export default request;
