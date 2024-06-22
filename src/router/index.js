import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthPage from '@/views/AuthPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthPage,
      meta: {
        requiresAuth: true
      }
    }
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = document.cookie.split("=")[1];
  if(isAuthenticated) {
    if(to.path === "/auth") {
      next("/");
    } else {
      next();
    }
  } else {
    if(to.path !== "/auth") {
      next("/auth");
    } else {
      next();
    }
  }
});



export default router;
