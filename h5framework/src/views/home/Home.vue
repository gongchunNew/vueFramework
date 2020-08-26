<template>
  <div class="home">
      <span @click="topage()">点击</span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    topage () {
      console.log(this.globalConfig)
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
}
</style>
