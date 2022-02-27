import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import VueCountryCode from "vue-country-code"
import store from '@/store'
import router from '@/router'

Vue.use(VueCountryCode);

Vue.config.productionTip = false

Vue.use(vuetify)

new Vue({
  render: h => h(App),
  store,
  router,
  vuetify,
}).$mount('#app')
