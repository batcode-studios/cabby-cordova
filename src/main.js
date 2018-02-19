// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'vuetify/dist/vuetify.css'
import('../node_modules/swiper/dist/css/swiper.css')

import App from './App'
import router from './router'
import store from './store'

// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.orange.darken3,
    secondary: colors.orange.lighten4,
    accent: colors.indigo.base
  }
})
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
