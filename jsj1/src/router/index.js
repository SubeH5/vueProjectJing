import Vue from 'vue'
import Router from 'vue-router'

import Zj from '../components/Zujian1-1'
import Zj2 from  '../components/Zujian1-2'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/zj1',component:Zj},
    {path:'/zj2',component:Zj2}
  ]
})





