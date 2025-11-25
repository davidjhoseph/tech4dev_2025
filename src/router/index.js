import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { isAuthenticated } from '@/utils/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {

  const authenticated = isAuthenticated();

  if (to.meta.requiresAuth && !authenticated) {
    next({ name: "auth-page" });
  }

  if (to.meta.requiresGuest && authenticated) {
    next({ name: "dashboard-page" });
  }

  next();
});

export default router
