import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonnageView from '../views/PersonnageView.vue'
import HistoriqueView from '../views/HistoriqueView.vue'
import CallView from '../views/CallView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/personnage',
    name: 'personnage',
    component: PersonnageView
  },
  {
    path: '/historique',
    name: 'historique',
    component: HistoriqueView
  },
  {
    path: '/call',
    name: 'call',
    component: CallView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
