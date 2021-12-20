import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: () => import('./views/Tasks/Tasks.vue')
  },
  {
    path: '/tasks/:id',
    name: 'ShowTaskDetail',
    component: () => import('./views/Tasks/Detail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
