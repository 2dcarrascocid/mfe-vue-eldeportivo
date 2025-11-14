import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/login/LoginView.vue';
import HomeView from '../views/login/HomeView.vue';

const routes = [
  { path: '/', name: 'Login', component: LoginView  },
  { path: "/home", name: "home", component: HomeView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
