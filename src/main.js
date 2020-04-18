import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './routers'
import store from './stores'

//引入axios
import axios from 'axios'
//挂载到原型上
Vue.prototype.axios = axios;
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')