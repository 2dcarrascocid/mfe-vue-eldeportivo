// shell/src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/login", name: "LoginModule", component: () => import("mfe-login/App.vue"),  },
  { path: "/", name: "Home", component: () => import("./views/HomeShell.vue"), },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: () => import("./views/NotFound.vue"), }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

