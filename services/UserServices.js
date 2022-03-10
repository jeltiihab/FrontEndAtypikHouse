import axios from "axios";

const getUsers = async () => {
  const response = await axios.get("/users");
  return response;
};

const getUserById = async (id) => {
  const response = await axios.get('users/' + userId);
  return response;
};

const deleteUserById = async (id) => {
  const response = await axios.delete('/users' + userId);
  return response;
};


const putUserId = async (id, data) => {
  const response = await axios.put('/users' + userId, data);
  return response;
};

export {
  getUsers,
  deleteUserById,
  putUserId,
  getUserById
};
