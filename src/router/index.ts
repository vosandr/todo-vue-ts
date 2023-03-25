import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AddTaskView from '@/views/AddTaskView.vue'
import TaskView from '@/views/TaskView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-task',
    name: 'add-task',
    component: AddTaskView
  },
  {
    path:'/task/:id',
    name: 'task',
    component: TaskView,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
