import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import './assets/styles.scss'

Vue.use(Vuelidate)
Vue.config.productionTip = true
Vue.config.devtools = true

new Vue({
  render: h => h(App),
}).$mount('#app')
