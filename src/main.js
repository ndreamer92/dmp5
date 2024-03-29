import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'


Vue.config.productionTip = false

Vue.use(Vuetify)

//Global variable for constant api endpoint
const apiEndpoint = 'https://api.ggfl.ru'
Vue.$apiEndpoint = apiEndpoint

new Vue({
  router,
  store,
  render: function (h) { return h(App) }, 
  created() {
    store.dispatch('LOAD_GAMES')
    store.dispatch('LOAD_TOP_GAMES')
    store.dispatch('LOAD_RECENT_ADDED')
  }
}).$mount('#app')
