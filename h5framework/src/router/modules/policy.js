/* ------------------------------------------ policy模块 ------------------------------------------ */

const policy = [
  {
    name: 'policy',
    path: '/policy/home',
    meta: {
      title: '在线投保',
      ignoreWechatShare: true
    },
    component: () => {
      return import(
        '@/views/policy/policy.vue'
      )
    }
  }
]

export default policy
