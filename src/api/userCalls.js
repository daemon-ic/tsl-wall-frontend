import axios from "axios";
import { DOMAIN } from "../misc/constants";
import { getCookie } from "../misc/utils";

export const axiosSignup = async (payload) => {
  try {
    const response = await axios.post(DOMAIN + "/api/register/", payload, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log("CREATING USER FAILED", error);
  }
};

export const axiosLogin = async (payload) => {
  try {
    const response = await axios.post(DOMAIN + "/api/login/", payload, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log("LOGIN FAILED", error);
  }
};

export const axiosLogout = async () => {
  try {
    const response = await axios.get(DOMAIN + "/api/logout/", {
      headers: {
        "X-CSRFToken": getCookie("csrftoken"),
      },
      withCredentials: true,
    });
  } catch (e) {
    console.log("LOGOUT FAILED", e);
  }
};

export const axiosGetAllUsers = async () => {
  try {
    const response = await axios.get(DOMAIN + "/api/users/");
    return response.data;
  } catch (error) {
    console.log("GETTING USERS FAILED", error);
  }
};

export const axiosGetUser = async () => {
  try {
    const response = await axios.get(DOMAIN + "/api/user/", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const axiosGetProfile = async (payload) => {
  try {
    const response = await axios.post(DOMAIN + "/api/profile/", payload, {
      headers: {
        "X-CSRFToken": getCookie("csrftoken"),
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
