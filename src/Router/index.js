import Vue from 'vue'
import Router from 'vue-router'

import OrderList from "../components/OrderList";
import AddOrder from "../components/AddOrder";
import Orders from "../components/views/Orders";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Orders
    },
    {
      path: '/add',
      component: AddOrder
    }
  ]
})
