import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/login/LoginView.vue";
import ProfileView from "../views/login/ProfileView.vue";
import HomeView from "../views/login/HomeView.vue";
import FacebookCallbackView from '../views/login/FacebookCallbackView.vue';
import ProfileFacebook from '../views/login/ProfileFacebook.vue'

const routes = [
  {
    path: "/login",            // ⬅️ DEBE empezar con "/"
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
  {
    path: '/login/facebook/callback',
    name: 'facebookCallback',
    component: FacebookCallbackView,
  },
  {
    path: "/profilefacebook",     // ⬅️ DEBE empezar con "/"
    name: "ProfileLoginFacebook",
    component: ProfileFacebook,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
