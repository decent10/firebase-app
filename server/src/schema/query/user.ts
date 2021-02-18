import DB from "../../core/firebase";

export default async (root, args) => {
  const userRef = await DB.collection("users");

  const snapshot = await userRef.where("uid", "==", args.id).get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return null;
  }
  console.log(snapshot.docs);
  return snapshot.docs[0].data();
};
