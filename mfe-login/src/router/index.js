import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/login/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
