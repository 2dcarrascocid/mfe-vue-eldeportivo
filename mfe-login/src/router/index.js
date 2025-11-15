import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/login/LoginView.vue';
import ProfileView from "../views/login/ProfileView.vue";
import HomeView from '../views/login/HomeView.vue';

const routes = [
  { path: '/', name: 'Login', component: LoginView  },
  { path: "/profile", name: "Profile", component: ProfileView },
  { path: "/callback", name: "home", component: HomeView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;