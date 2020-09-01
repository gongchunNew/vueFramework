/* ------------------------------------------ customer模块 ------------------------------------------ */

const customer = [
  {
    name: 'customer',
    path: '/customer/home',
    meta: {
      title: '客户管理',
      ignoreWechatShare: true
    },
    component: () => {
      return import(
        '@/views/customer/customer.vue'
      )
    }
  }
]

export default customer
