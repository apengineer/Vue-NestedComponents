import Vue from 'vue'
import App from './App.vue'

// exporting event bus which will be imported in Header/footer
export const eventBus = new Vue();



new Vue({
  el: '#app',
  render: h => h(App)
})
