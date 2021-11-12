import { createContext, useContext, useEffect, useState } from "react";
import { axiosGetUser } from "../api/userCalls";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const redirectToHome = () => {
    if (window.location.pathname === "/") {
      window.location.href = "/home";
    }
  };

  const loadUserData = async () => {
    try {
      const currentUser = await axiosGetUser();
      console.log("CURRENT USER: ", currentUser);
      setUser(currentUser);
      if (!currentUser) return;
      redirectToHome();
    } catch (error) {
      console.log("GETTING USER FAILED", error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <UserContext.Provider
      value={
        user
          ? { user: { ...user }, setUser: setUser }
          : { user: null, setUser: setUser }
      }
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
