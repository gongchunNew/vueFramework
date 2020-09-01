<template>
  <div id="app">
    <App-Bar>
      <img slot="left" src="../src/assets/imgs/common/icon/icon_back.png" class="icon icon-back" />
      <template slot="center">我是一个标题</template>
      <img
        slot="right"
        src="../src/assets/imgs/common/icon/icon_search.png"
        class="icon icon-search"
      />
    </App-Bar>
      <router-view/>
    <AppTabbar></AppTabbar>
  </div>
</template>
<script>
import AppBar from '@/components/global/AppBar'
import AppTabbar from '@/components/global/AppTabbar'
export default {
  components: {
    AppTabbar,
    AppBar
  },
  props: {},
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="scss">
@import "@/assets/css/global/main.scss";
.icon {
  height: auto;

  &.icon-back {
    width: 16px;
  }

  &.icon-search {
    width: 25px;
  }
}
</style>
