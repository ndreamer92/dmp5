import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Browse from './views/Browse.vue'
import Info from './views/Info.vue'
import Search from './views/Search.vue'
import Top from './views/Top.vue'
import GameDeals from './views/GameDeals.vue'
import GameDetailedView from './views/GameDetailedView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/browse',
      name: 'browse',
      component: Browse
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/Top',
      name: 'Top',
      component: Top
    },
    {
      path: '/gameDeals/:gameId',
      name: 'gameDeals',
      props: true,
      component: GameDeals
    }, 
    {
      path: '/gameDetailedView/:gameId',
      name: 'gameDetailedView',
      props: true,
      component: GameDetailedView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})
