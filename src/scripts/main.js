import Vue from 'vue'
import Vuex from 'vuex'
import { router } from './routes'
import actions from './store/actions'
import getters from './store/getters'
import mutations from './store/mutations'
import App from './App.vue'

Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  store: new Vuex.Store({
    state: {
      something: 'nothings'
    },
    actions,
    getters,
    mutations
  }),
  render: h => h(App)
})
