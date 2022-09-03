import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'tarefas',
    component: () => import('../views/TarefasView.vue')
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/SobreView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
