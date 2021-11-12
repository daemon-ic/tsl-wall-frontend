import { useState, useEffect } from "react";
import { axiosGetAllPosts } from "../api/postCalls";

export const useGetPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    console.log("GETTING POSTS FIRED");
    try {
      let result = await axiosGetAllPosts();
      result = result.sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
      setPosts(result);
      console.log("GETTING POST DATA", posts);
    } catch (e) {
      // TODO
      alert("Error getting posts: ", e.message);
    }
  };
  return { posts, getPosts };
};
