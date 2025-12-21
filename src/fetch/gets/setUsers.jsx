import axios from "axios";

const BASE_URL = "https://69458ef1ed253f51719bbda1.mockapi.io/project/users";

export const createUser = async (user) => {
  const res = await axios.post(BASE_URL, user);
  return res.data;
};
