import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ComingSoon from './components/ComingSoon.vue'
import About from './views/About.vue'
import ThanksForSigningUp from './components/ThanksForSigningUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: "*",
    //   name: 'everything',
    //   component: ComingSoon
    // },
    {
      path: '/about',
      name: 'about',
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThanksForSigningUp
    },
  ]
})
