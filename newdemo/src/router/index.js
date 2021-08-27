import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ShopIndex',
    component: () => import('../views/ShopFirst')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/phone',
    name: 'Phone',
    component: () => import('../views/ShopIndex'),
    props: true
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: () => import('../views/Shopcar')
  }
]

const router = new VueRouter({
  routes
})

export default router
