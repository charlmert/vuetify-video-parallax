import Vue from 'vue'
import App from '@/App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  breakpoint: {
    thresholds: {
      xs: 340,
      sm: 540,
      md: 800,
      lg: 1280,
    },
    scrollBarWidth: 24,
  }
})

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  render: h => h(App),
})
