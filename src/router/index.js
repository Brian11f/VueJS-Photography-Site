import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Gallery from '@/components/Gallery'

Vue.use(Router)

export default new Router({
  history: false,
  root: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    }
  ]
})
