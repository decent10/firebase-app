import DB from "../../core/firebase";

export default async (root, args) => {
  const ordersRef = await DB.collection("orders");

  const snapshot = await ordersRef.where("address.city", "==", args.city).get();
  console.log(args.city, snapshot);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return [];
  }
  return snapshot.docs.map((doc) => {
    return {
      uid: doc.id,
      ...doc.data(),
    };
  });
};
