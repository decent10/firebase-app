import DB from "../../core/firebase";

export default async () => {
  const ordersRef = await DB.collection("orders");
  const snapshot = await ordersRef.get();
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
