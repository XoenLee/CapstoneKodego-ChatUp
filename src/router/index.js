import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '../views/AboutView.vue'
import ContactUsViewVue from '@/views/ContactUsView.vue'
import SignInViewVue from '@/views/SignInView.vue'
import SignUpViewVue from '@/views/SignUpView.vue'
import PageNotFoundVue from '@/views/PageNotFound.vue'
import ForgotPasswordViewVue from '@/views/ForgotPasswordView.vue'
import ChatApp from '../views/ChatApp.vue'
import Login from '../views/SignInView.vue'

const routes = [
  
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },

  {
    path: '/Forgot',
    name: 'ForgotPassword',
    component: ForgotPasswordViewVue
  },

  {
    path: '/About',
    name: 'AboutView',
    component: AboutViewVue
  },

  {
    path: '/Contact',
    name: 'ContactUsViewVue',
    component: ContactUsViewVue
  },

  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignInViewVue
  },

  {
    path: '/SignUp',
    name: 'SignUpViewVue',
    component: SignUpViewVue
  },


  {
    path: '/:pathMacth(.*)*',
    name: 'PageNotFoundVue',
    component: PageNotFoundVue
  },
  {
    path: '/',
    name: 'homepage',
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatApp
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router