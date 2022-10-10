import Vue from 'vue'
import VueRouter from 'vue-router'
import TasksView from '../views/TasksView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    component: TasksView
  },
  {
    path: '/users',
    name: 'Sobre',
    component: () => import('../views/ShowUsers.vue')
  },
  {
    path: '/about',
    name: 'Sobre',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
