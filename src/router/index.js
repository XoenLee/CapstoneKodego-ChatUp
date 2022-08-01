import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '../views/AboutView.vue'
import ChatUpViewVue from '@/views/ChatUpView.vue'
import ContactUsViewVue from '@/views/ContactUsView.vue'
import SignInViewVue from '@/views/SignInView.vue'
import SignUpViewVue from '@/views/SignUpView.vue'
import PageNotFoundVue from '@/views/PageNotFound.vue'



const routes = [
  
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },

  {
    path: '/About',
    name: 'AboutView',
    component: AboutViewVue
  },

  {
    path: '/ChatUp',
    name: 'ChatUpView',
    component: ChatUpViewVue
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
  


]




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
