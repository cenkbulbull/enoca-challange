import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import About from '../views/About.vue'
import Search from '../views/Search.vue'
import Business from '../views/Business.vue'
import Entertainment from '../views/Entertainment.vue'
import General from '../views/General.vue'
import Health from '../views/Health.vue'
import Science from '../views/Science.vue'
import Sports from '../views/Sports.vue'
import Technology from '../views/Technology.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories,
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/search/:keyword',
    name: 'search',
    component: Search,
  },
  {
    path: '/business',
    name: 'business',
    component: Business
  },
  {
    path: '/entertainment',
    name: 'entertainment',
    component: Entertainment
  },
  {
    path: '/general',
    name: 'general',
    component: General
  },
  {
    path: '/health',
    name: 'health',
    component: Health
  },
  {
    path: '/science',
    name: 'science',
    component: Science
  },
  {
    path: '/sports',
    name: 'sports',
    component: Sports
  },
  {
    path: '/technology',
    name: 'technology',
    component: Technology
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
