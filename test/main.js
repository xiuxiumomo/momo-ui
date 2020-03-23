import Vue from 'vue'
import App from './App.vue'
import momoUI from '../packages'
import '../packages/scss/index.scss';
Vue.config.productionTip = false
Vue.use(momoUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
