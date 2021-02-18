import DB from "../../core/firebase";

export default async (root, args) => {
  const order = {
    customer: {
      ...args.input.user,
    },
    title: args.title,
    bookingDate: args.bookingDate,
    address: {
      ...args.input.address,
    },
  };
  console.log(order);
  const res = await DB.collection("orders").doc().set(order);
  console.log(res);
  return res;
};
