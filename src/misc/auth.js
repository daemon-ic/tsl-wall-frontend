import { AUTH_TOKEN } from "./constants";

// Checks if auth token cached
export const getSession = () => {
  const token = localStorage.getItem(AUTH_TOKEN);
  if (!token) return null;

  try {
    const parsed = JSON.parse(token);
    return parsed;
  } catch (e) {
    return null;
  }
};
