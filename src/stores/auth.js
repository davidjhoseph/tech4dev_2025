import { defineStore } from "pinia";
import api from "@/helpers/axios";
import { ref, computed } from "vue";
export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("authToken") || null);
  const user = ref(JSON.parse(localStorage.getItem("user")) || null);
  const setToken = (token) => {
    token.value = token;
    localStorage.setItem("authToken", token);
  };
  const clearToken = () => {
    token.value = null;
    localStorage.removeItem("authToken");
    clearUser();
  };
  const setUser = (user) => {
    user.value = user;
    localStorage.setItem("user", JSON.stringify(user));
  };
  const clearUser = () => {
    user.value = null;
    localStorage.removeItem("user");
  };
  const isAuthenticated = computed(() => {
    return token.value !== null;
  });

  const login = async (email, password) => {
    try {
        const response = await api.post("/auth/login", { email, password });
        setToken(response.data.token);
        setUser(response.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = computed(() => user.value);

  return { token, setToken, clearToken, isAuthenticated, getUser };
});
