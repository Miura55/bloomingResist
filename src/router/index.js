import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Login from '@/components/Login'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSwal from 'vue-swal'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueSwal)
Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
