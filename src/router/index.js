import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactsView from '@/views/ContactsView.vue'
import Page404 from '@/views/Page404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
    },
    {
      path: '/about-us',
      redirect: 'about'
    },
    {
      path: '/:catchAll(.*)',
      name: 'Page404',
      component: Page404
    }
  ]
})

export default router
