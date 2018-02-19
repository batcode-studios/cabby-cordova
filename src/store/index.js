import Vue from 'vue'
import Vuex from 'vuex'

import globals from './globals'
import globalAlert from '@/components/global-alert/vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    globals,
    globalAlert
  }
})
