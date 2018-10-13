import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bottle from '@/components/bottle'
import Cloth from '@/components/cloth'
import Book from '@/components/book'
import Main from '@/components/main'
import Plant from '@/components/plantTree'
import User from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bottle',
      component: Bottle
    },
    {
      path: '/cloth',
      component: Cloth
    },
    {
      path: '/book',
      component: Book
    },
    {
      path: '/main',
      component: Main
    },
    {
      path: '/plant',
      component: Plant
    },
    {
      path: '/user',
      component: User
    }
  ]
})
