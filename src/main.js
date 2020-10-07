import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import Mock from './mock'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
  Mock,
  router
}).$mount('#app')
