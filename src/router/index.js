import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/work-with-me",
      name: "work-with-me",
      component: () => import('../views/HireMe.vue')
    },
    {
      path: "/home2",
      name: "home2",
      component: () => import('../views/Home2.vue')
    },
    {
      path: "/almost-there",
      name: "almost-there",
      component: () => import('../components/AlmostThere.vue')
    },
    {
      path: "/thank-you",
      name: "thank-you",
      component: () => import('../components/ThanksForSigningUp.vue')
    },
    {
      path: "/loading-animation",
      name: "loading-animation",
      component: () => import('../views/TutorialLoadingAnimation.vue')
    },
    {
      path: "/adventures",
      name: "adventure-overview",
      component: () => import('../views/AdventureOverview.vue')
    },
    {
      path: "/adventures/test",
      name: "AllAdventureSectionsHarcoded",
      component: () => import('../views/AllAdventureSectionsHardcoded.vue')
    },
    {
      path: "/adventures/:uid",
      name: "roadtrip",
      component: () => import('../views/Roadtrip.vue')
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import('../views/BlogOverview.vue')
    },
    {
      path: "/blog/:uid/:tutid?",
      name: "blog-post",
      component: () => import('../views/BlogPost.vue')
    },
    {
      path: "/links",
      name: "links",
      component: () => import('../views/Links.vue')
    },
    {
      path: "/comingsoon",
      name: "comingsoon",
      component: () => import('../components/ComingSoon.vue')
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import('../views/Portfolio.vue')
    },
  ]
})

export default router