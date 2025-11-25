import HomeView from "@/pages/HomeView.vue";
import AboutView from "@/pages/AboutView.vue";
import ProfileView from "@/pages/ProfileView.vue";
import AuthLayout from "@/components/layout/AuthLayout.vue";
import LoginView from "@/pages/LoginView.vue";
import RegisterView from "@/pages/RegisterView.vue";
import GeneralLayout from "@/components/layout/GeneralLayout.vue";
export default [
  {
    path: "/",
    component: GeneralLayout,
    name: "dashboard-page",
    meta: { requiresAuth: true },
    children: [
      { path: "", component: HomeView, name: "home-page" },
      { path: "about", component: AboutView, name: "about-page" },
      { path: "profile", component: ProfileView, name: "profile-page" },
    ],
  },
  {
    path: "/auth",
    component: AuthLayout,
    name: "auth-page",
    meta: { requiresGuest: true },
    redirect: "/auth/login",
    children: [
      { path: "login", component: LoginView, name: "login-page"},
      { path: "register", component: RegisterView, name: "register-page" },
    ],
  },

];


// Parent Route: /auth   => AuthLayout <RouterView />


// Child Route: /auth/login => LoginView
// Child Route: /auth/register => RegisterView
