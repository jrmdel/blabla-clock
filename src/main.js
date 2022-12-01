import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { Fragment } from 'vue-frag'

Vue.config.productionTip = false
// eslint-disable-next-line 
Vue.component('Fragment', Fragment)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
