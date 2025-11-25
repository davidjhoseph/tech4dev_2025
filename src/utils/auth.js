export const isAuthenticated = () => {
  return localStorage.getItem("isLoggedIn") !== null;
};
