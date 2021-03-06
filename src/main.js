import Vue from 'vue'
import App from './App.vue'



//设置axios 到原型上 方便共享
import axios from 'axios'
Vue.prototype.$axios = axios;

//设置axios的基地址
axios.defaults.baseURL = 'http://111.230.232.110:8899';



// 导入公共样式
import './assets/statics/site/css/style.css'

// 导入首页组件
import index from './components/index.vue'
// 导入详情组件
import detail from './components/detail.vue'

//导入router 
import VueRouter from 'vue-router'

//导入饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


// vue.use
Vue.use(VueRouter)

//写规则
const routes = [
  {
    //重定向
    path:"/",
    redirect:'/index'
  },
  {
    path:'/index',component:index
  },
  {
    path:'/detail/:id',component:detail
  }
]

//实例化路由对象
const router = new VueRouter({
    routes
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // 挂载到顶级
  router
}).$mount('#app')
