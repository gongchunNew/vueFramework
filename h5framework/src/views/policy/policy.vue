<template>
  <Page :withAppBar="globalConfig.inApp" :withAppTabbar="true">
    <div class="wrapper" v-for="(page, index) in pageArray" :key="index">policy {{ page.name }}</div>
  </Page>
</template>

<script>
import Page from '@/components/global/Page'
export default {
  components: {
    Page
  },
  props: {},
  data () {
    return {
      pageArray: [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }, { name: '6' }, { name: '7' }, { name: '8' }, { name: '9' }, { name: '10' }, { name: '11' }, { name: '12' }, { name: '13' }, { name: '14' }, { name: '15' }, { name: '16' }, { name: '17' }, { name: '18' }],
      isHaveAppTabbar: true
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.wrapper {
    background-color: yellow;
    height: 50px;
}
</style>
