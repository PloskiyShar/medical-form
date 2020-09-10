import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import './assets/styles.scss'

console.log('Привет', process.env.SERVER)
Vue.use(Vuelidate)
Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
