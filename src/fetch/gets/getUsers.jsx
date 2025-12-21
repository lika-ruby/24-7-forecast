import axios from "axios";

const BASE_URL = "https://69458ef1ed253f51719bbda1.mockapi.io/project/users";

export const getUsers = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};
