<template>
  <div class="home">
      <App-Bar>
        <img
        slot="left"
        src="../../assets/imgs/common/icon/icon_back.png"
        class="icon icon-back"
      />
      <template slot="center">
        我是一个标题
      </template>
      <img
        slot="right"
        src="../../assets/imgs/common/icon/icon_search.png"
        class="icon icon-search"
      />
      </App-Bar>
  </div>
</template>

<script>
import AppBar from '@/components/global/AppBar'

export default {
  components: {
    AppBar
  },
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    topage () {
      // console.log(this.globalConfig)
      this.go('domehome')
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.home{
 font-size: 20px;
  .icon {
    height: auto;

    &.icon-back {
      width: 16px;
    }

    &.icon-search {
      width: 25px;
    }
  }
}
</style>
