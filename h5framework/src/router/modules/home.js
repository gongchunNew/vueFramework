/* ------------------------------------------ home模块 ------------------------------------------ */

const home = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '主页',
      ignoreWechatShare: true
    },
    component: () => {
      return import(
        '@/views/home/Home.vue'
      )
    }
  }
]

export default home
