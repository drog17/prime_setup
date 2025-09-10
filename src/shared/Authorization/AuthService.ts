
import axios from '../../utils/axiosInstance';


export const registerUser = async (email: string, password: string) => {
  const response = await axios.post('/register', {
    email,
    password,
  });
  return response.data;
};

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post('/login', {
    email,
    password,
  });
  return response.data;
};

export const getUserProfile = async () => {
  const response = await axios.get('/profile');
  return response.data;
};

export const logoutUser = async () => {
  const response = await axios.post('/logout');
  return response.data;
};
