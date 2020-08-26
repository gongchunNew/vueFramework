/* ------------------------------------------ dome模块 ------------------------------------------ */

const dome = [
  {
    name: 'dome',
    path: '/demo/demohome',
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
