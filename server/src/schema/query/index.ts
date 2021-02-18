import orders from "./orders";
import users from "./users";
import user from "./user";
import ordersByCity from "./ordersByCity";

const queryPermissions = {};

const Query = {
  orders,
  users,
  ordersByCity,
  user,
};

export { Query, queryPermissions };
