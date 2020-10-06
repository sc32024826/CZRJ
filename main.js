import Vue from 'vue'
import App from './App'
import store from './store'
// #ifndef MP-WEIXIN
import './static/iconfont.js'
// #endif

Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
