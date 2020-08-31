/* ------------------------------------------ dome模块 ------------------------------------------ */

const dome = [
  {
    name: 'domehome',
    path: '/',
    meta: {
      title: 'demo主页',
      ignoreWechatShare: true
    },
    component: () => {
      return import(
        '@/views/demo/DemoHome.vue'
      )
    }
  }
]

export default dome
