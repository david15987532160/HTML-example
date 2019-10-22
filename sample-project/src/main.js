import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('todo-item',{
  template: '<li>This is a todo</li>'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
