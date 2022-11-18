import { createRouter, createWebHistory, } from 'vue-router'

// const routerHistory = createWebHistory()

import HomePage from '@/pages/homePage'
import AboutPage from '@/pages/aboutPage'
import ContactPage from '@/pages/contactPage'
import NotFoundPage from '@/pages/notFoundPage'
import singlePostPage from '@/pages/singlePostPage'

const routers = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    },
    {
      path: '/:itemAlias',
      name: 'aliasAlias',
      component:singlePostPage

    },
    {
      path: '/:CatchAll(.*)',
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
})

export default routers
