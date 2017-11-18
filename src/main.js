import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css';
import NewCreativeDialog from './components/NewCreativeDialog.vue'
import './utils/vueHelpers'

new Vue({
  el: '#app',
  render: (h) => h(NewCreativeDialog)
})
