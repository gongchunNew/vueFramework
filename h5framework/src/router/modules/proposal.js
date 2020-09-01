/* ------------------------------------------ proposal模块 ------------------------------------------ */

const proposal = [
  {
    name: 'proposal',
    path: '/proposal/home',
    meta: {
      title: '建议书',
      ignoreWechatShare: true
    },
    component: () => {
      return import(
        '@/views/proposal/proposal.vue'
      )
    }
  }
]

export default proposal
