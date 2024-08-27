import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import agregarMateria from "../pages/agregarMateria.vue"
import consultarMaterias from "../pages/consultarMaterias.vue"
import consultarMateriasCompleto from "../pages/consultarMateriasCompleto"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/agregarMateria',
    name: 'agregarMateria',
    component: agregarMateria
  },
  {
    path: '/consultarMaterias',
    name: 'consultarMaterias',
    component: consultarMaterias
  },
  {
    path: '/consultarMateriasTodos',
    name: 'consultarMateriasCompleto',
    component: consultarMateriasCompleto
  },



  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
