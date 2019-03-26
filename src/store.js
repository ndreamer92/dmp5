import Vue from 'vue'
import Vuex from 'vuex'
import dealsModule from './store/Deals'
import gamesModule from './store/Games'
import userModule from './store/UserData'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    dealsModule,
    gamesModule,
    userModule
  }
})
