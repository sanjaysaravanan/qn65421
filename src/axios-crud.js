import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

const beInstance = axios.create({
  baseURL: url,
  timeout: 1000,
});

const getAllUsers = async () => {
  const response = await beInstance.get("/");

  return response.data;
};

const createUser = async (userData) => {
  const response = await beInstance.post("/", userData);

  return response.data;
};

const deleteUser = async (userId) => {
  const response = await beInstance.delete(`/${userId}`);
  return response.data;
};

const updateuser = async (userData, userId) => {
  const response = await beInstance.put(`/${userId}`, userData);

  return response.data;
};

export { getAllUsers, createUser, deleteUser, updateuser };
