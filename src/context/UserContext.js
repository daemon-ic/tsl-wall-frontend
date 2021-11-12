import { createContext, useContext, useEffect, useState } from "react";
import { axiosGetUser } from "../api/userCalls";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const redirectToHome = () => {
    window.location.href = "/home";
  };

  const loadUserData = async () => {
    try {
      const currentUser = await axiosGetUser();
      if (!currentUser) return;
      setUser(currentUser);
      if (window.location.pathname === "/") {
        redirectToHome();
      }
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
