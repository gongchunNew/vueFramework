<template>
  <div class="app-tabbar">
    <div class="tabbar-item" v-for="(tab ,index) in tabArray" :key="index" @click="switchTo(tab)">
      <img :src="tab.path === $route.name ? tab.select : tab.normal" class="item-img"/>
      <span :class="{ on: tab.path === $route.name }" class="item-text">{{ tab.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appTabbar',
  components: {},
  props: {},
  data () {
    return {
      tabArray: [
        {
          path: 'domehome',
          name: '首页',
          normal: require('@/assets/imgs/home/home.png'),
          select: require('@/assets/imgs/home/home_selected.png')
        },
        {
          path: 'customer',
          name: '客户管理',
          normal: require('@/assets/imgs/home/customer.png'),
          select: require('@/assets/imgs/home/customer_selected.png')
        },
        {
          path: 'proposal',
          name: '建议书',
          normal: require('@/assets/imgs/home/proposal.png'),
          select: require('@/assets/imgs/home/proposal_selected.png')
        },
        {
          path: 'policy',
          name: '在线投保',
          normal: require('@/assets/imgs/home/policy.png'),
          select: require('@/assets/imgs/home/policy_selected.png')
        }
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {
    switchTo (obj) {
      this.go(obj.path)
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.app-tabbar {
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  background-color:lightgray;
  .tabbar-item {
    display: flex;
    flex-direction: column;
    width: 80px;
    height: 49px;

    .item-img {
      width: 28px;
      height: 26px;
      margin-left: 26px;
    }
    .item-text {
      width: 100%;
      height: 20px;
      font-size: 12px;
      text-align: center;
    }
    .on{
      color: red;
    }
  }
}
</style>
