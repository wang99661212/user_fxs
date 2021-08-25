import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'amfe-flexible'
import './iconfont/iconfont.css'

//配置vantUI组件库
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(ElementUI);
// 把axios挂载到Vue的原型上，这样的话项目中任何一个组件都可以使用了
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')