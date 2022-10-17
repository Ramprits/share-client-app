import axios from "axios";
import constants from "./constants";
export const authProvider = {
  login: async ({ email, password }) => {
    try {
      const response = await axios.post<{ token: string }>(
        `${constants.AUTH_API_URL}/signin`,
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        localStorage.setItem(constants.TOKEN_KEY, response.data.token);
      }
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject("Please enter a valid email and password");
    }
  },
  register: async ({ name, email, password }) => {
    try {
      const response = await axios.post(`${constants.AUTH_API_URL}/signup`, {
        email,
        password,
        name,
      });
      if (response.status === 200) {
        return Promise.resolve("/login");
      }
    } catch (error) {
      if (error instanceof Error) {
        return Promise.reject(error.message);
      }
    }
  },
  forgotPassword: ({ email }) => Promise.resolve(),
  updatePassword: ({ password }) => Promise.resolve(),
  logout: () => Promise.resolve(),
  checkAuth: () => {
    if (localStorage.getItem(constants.TOKEN_KEY)) {
      return Promise.resolve();
    }
    return Promise.reject();
  },
  checkError: (error: Error) => {
    if (error instanceof Error) {
      return Promise.reject(error.message);
    }
    return Promise.resolve();
  },
  getPermissions: () => Promise.resolve(),
  getUserIdentity: () => Promise.resolve(),
};
