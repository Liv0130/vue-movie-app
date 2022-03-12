import { createRouter, createWebHashHistory } from 'vue-router' 
import Home from './Home'
import About from './About'
import Movie from './Movie'
import Notfound from './NotFound'

export default createRouter({
  // Hash or History, we use Hash
  // https://google.com/#/search
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  // pages
  // https://google.com/ -> will move to the main page
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:pathFound(.*)',
      component: Notfound
    }
  ]
})