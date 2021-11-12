import axios from "axios";
import { DOMAIN } from "../misc/constants";
import { getCookie } from "../misc/utils";

export const axiosGetAllPosts = async () => {
  try {
    const response = await axios.get(DOMAIN + "/api/all-posts/", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const axiosGetOthersPosts = async (payload) => {
  try {
    const response = await axios.post(DOMAIN + "/api/others-posts/", payload, {
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

export const axiosGetCurrentUserPosts = async () => {
  try {
    const response = await axios.get(DOMAIN + "/api/user-posts/", {
      withCredentials: true,
    });
    console.log("POSTS RETREIVED", response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const axiosCreatePost = async (payload) => {
  try {
    const response = await axios.post(DOMAIN + "/api/posts/", payload, {
      headers: {
        "X-CSRFToken": getCookie("csrftoken"),
      },
      withCredentials: true,
    });
  } catch (error) {
    console.log("CREATING POST FAILED", error);
  }
};

export const axiosDeletePost = () => {};
