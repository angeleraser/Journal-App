import { dataBase } from "../firebase/firebase-config";

export const fetchUserInfoFromDatabase = async (uID, path) => {
  const { docs } = await dataBase.collection(`${uID}/${path}`).get();
  const data = docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
  return data;
};
