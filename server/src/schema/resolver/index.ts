import { Query } from "../query";
import Mutation from "../mutation";

import { Order } from "./order";

// Resolvers define the technique for fetching the types defined in the
// schema.
const resolvers = {
  Query,
  Mutation,
};
export default resolvers;
