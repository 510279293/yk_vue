import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import yfLogin from '@/views/yf_pages/yf_login'
import yfRegister from '@/views/yf_pages/yf_register'
import yfEditPwd from '@/views/yf_pages/yf_editPwd'
import yfIndex from '@/views/yf_pages/yf_index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/yfLogin',
      name: 'yfLogin',
      component: yfLogin
    },
    {
      path: '/yfRegister',
      name: 'yfRegister',
      component: yfRegister
    },
    {
      path: '/yfEditPwd',
      name: 'yfEditPwd',
      component: yfEditPwd
    },
    {
      path: '/yfIndex',
      name: 'yfIndex',
      component: yfIndex
    },
  ]
})
