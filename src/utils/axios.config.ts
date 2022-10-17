import { HttpError } from "@pankod/refine-core";
import axios, { AxiosRequestConfig } from "axios";
import constants from "./constants";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem(constants.TOKEN_KEY);
  if (token) {
    if (request.headers) {
      request.headers["ax-auth"] = token;
    } else {
      request.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
  }

  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response)
    return response;
  },
  (error) => {
    const customError: HttpError = {
      ...error,
      message: error.response?.data?.message
        ? error.response?.data?.message
        : error.response?.data?.msg,
      statusCode: error.response?.status,
    };

    return Promise.reject(customError);
  }
);
