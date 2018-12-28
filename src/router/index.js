import Vue from 'vue'
import VueRouter from 'vue-router'
import TypicalLayout from './../layout/typical'
import TodoList from './../pages/todo'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/main',
      component: TypicalLayout,
      children: [{
        path: 'todo',
        component: TodoList
      }]
    },{
      path: '*',
      component: TypicalLayout
    }
  ]
})
