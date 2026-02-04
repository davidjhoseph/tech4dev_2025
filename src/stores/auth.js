import { defineStore } from "pinia";
import api from "@/helpers/axios";
import { ref, computed } from "vue";
export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("authToken") || null);
  const user = ref(JSON.parse(localStorage.getItem("user")) || null);
  const setToken = (authToken) => {
    token.value = authToken;
    localStorage.setItem("authToken", authToken);
  };
  const clearToken = () => {
    token.value = null;
    localStorage.removeItem("authToken");
  };
  const setUser = (userData) => {
    user.value = userData;
    localStorage.setItem("user", JSON.stringify(userData));
  };
  const clearUser = () => {
    user.value = null;
    localStorage.removeItem("user");
  };
  const isAuthenticated = computed(() => token.value !== null);

  const login = async (email, password) => {
    try {
        const response = await api.post("/login", { email, password });

        setAuthCredentials(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (data) => {
    try {
      const response = await api.post("/register", data);
      setAuthCredentials(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const setAuthCredentials = (data) => {
    setToken(data.token);
    setUser(data.user);
  };

  const logout = () => {
    clearToken();
    clearUser();
  };

  const getUser = computed(() => user.value);

  return { token, setToken, isAuthenticated, getUser, login, logout, register };
});
