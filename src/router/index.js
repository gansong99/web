import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import goodsList from '@/page/goodsList.vue'
import changeCity from '@/page/changeCity.vue'

Vue.use(Router)

export default new Router({
  // mode: 'histosy',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      redirect: '/index',
      component: defaultPage,
      children: [{
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: 's/:name',
        name: 'goods',
        component: goodsList
      }]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    }, {
      path: '/changeCity',
      name: 'changeCity',
      component: changeCity
    }
  ]
})
