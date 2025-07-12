import axios from "axios";

axios.defaults.baseURL = "https://your-api-url.com";

export const AUTH_CHANGE_EVENT = "auth_state_changed";

interface User {
  name: string;
  email: string;
  id?: string;
  role?: string;
  created_at?: string;
}

export const isAuthenticated = () => {
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  return !!token;
};

export const getCurrentUser = (): User | null => {
  const userStr =
    localStorage.getItem("user") || sessionStorage.getItem("user");
  if (!userStr) return null;

  try {
    return JSON.parse(userStr) as User;
  } catch {
    return null;
  }
};

export const getAuthToken = () => {
  return (
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken")
  );
};

export const setUserData = (user: User, token: string, rememberMe: boolean) => {
  if (rememberMe) {
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    sessionStorage.setItem("authToken", token);
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
  }
};

export const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
  sessionStorage.removeItem("authToken");
  sessionStorage.removeItem("user");
  delete axios.defaults.headers.common["Authorization"];

  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
  }
};

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const initAuth = () => {
  const token = getAuthToken();
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};
