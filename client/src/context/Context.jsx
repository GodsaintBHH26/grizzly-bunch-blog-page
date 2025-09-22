import { createContext, useContext, useEffect, useState } from "react";
import api from "../components/api/axiosApi.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (token && user) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  });

  const loginUser = async (uemail, upassword) => {
    const res = await api.post("/auth/login", { uemail, upassword });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    setToken(res.data.token);
    setUser(res.data.user);
    return res.data;
  };

  const registerUser = async (uemail, upassword) => {
    const res = await api.post("/auth/register", { uemail, upassword });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    setToken(res.data.toke);
    setUser(res.data.user);
    return res.data;
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ loginUser, user, token, registerUser, logoutUser }}
    >
        {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
