import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TutorialLoadingAnimation from './views/TutorialLoadingAnimation'
import About from './views/About.vue'
import BlogOverview from './views/BlogOverview.vue'
import BlogPost from './views/BlogPost.vue'
import Links from './views/Links.vue'
import HireMe from './views/HireMe.vue'
import AlmostThere from './components/AlmostThere.vue'
import ThanksForSigningUp from './components/ThanksForSigningUp'
import ComingSoon from './components/ComingSoon.vue'
import Portfolio from './views/Portfolio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
      path: '/work-with-me',
      name: 'work-with-me',
      component: HireMe
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/almost-there',
      name: 'almost-there',
      component: AlmostThere
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThanksForSigningUp
    },
    {
      path: '/loading-animation',
      name: 'loading-animation',
      component: TutorialLoadingAnimation
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogOverview
    },
    {
      path: '/blog/:uid/:tutid?',
      name: 'blog-post',
      component: BlogPost,
    },
    {
      path: '/links',
      name: 'links',
      component: Links
    },
    {
      path: '/comingsoon',
      name: 'comingsoon',
      component: ComingSoon
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '*',
      name: 'everything',
      component: Home
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
