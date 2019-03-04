import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mockDeal: {
        name: 'Test Deal 1',
        description: 'This is simple desc for test deal',
        full_desc: 'This is full description of the deal - we need more text so why not to write it here! (leha bik)',
        imageLink: 'https://cdn.maximonline.ru/08/d3/ac/08d3ace29340d6ca95fad1f708f933ff/665x374_1_8821b17a1b9ab98357e628f0d6f0b53b@1476x830_0xac120005_13927478591529043572.jpg',
        price_usd: '10.0',
      }
  },
  mutations: {

  },
  actions: {

  },

})