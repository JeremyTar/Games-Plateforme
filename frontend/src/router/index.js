import { createRouter, createWebHistory } from 'vue-router'
import GameHome from "../views/GameHome.vue"
import LePendu from "../views/LePendu.vue"
import lAwale from "../views/lAwale.vue"

const routes = [
  {
    path: '/',
    name: 'GameHome',
    component: GameHome,
  },
  {
    path: '/lependu',
    name: 'LePendu',
    component: LePendu,
  },
  {
    path: "/lawale",
    name: "lAwale",
    component: lAwale,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
