import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/login/LoginView.vue";
import ProfileView from "../views/login/ProfileView.vue";
import HomeView from "../views/login/HomeView.vue";

const routes = [
  {
    path: "/",            // ⬅️ DEBE empezar con "/"
    name: "Login",
    component: LoginView,
  },
  {
    path: "/home",        // ⬅️ DEBE empezar con "/"
    name: "HomeLogin",
    component: HomeView,
  },
  {
    path: "/profile",     // ⬅️ DEBE empezar con "/"
    name: "ProfileLogin",
    component: ProfileView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
