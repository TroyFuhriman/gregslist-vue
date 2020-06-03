import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../pages/Home.vue'
// @ts-ignore
import CarDetails from '../pages/CarDetailsPage.vue'
// @ts-ignore
import HouseDetails from '../pages/HouseDetailsPage.vue'
// @ts-ignore
import JobDetails from '../pages/JobDetailsPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetails
  },
  {
    path: '/house/:id',
    name: 'HouseDetails',
    component: HouseDetails
  },
  {
    path: '/job/:id',
    name: 'JobDetails',
    component: JobDetails
  },
  {
    path: "*",
    redirect: "/"
  }
]

const router = new VueRouter({
  routes
})

export default router
