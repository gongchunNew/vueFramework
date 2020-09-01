<template>
  <Page :withAppBar="globalConfig.inApp">
    <div class="wrapper">policy</div>
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
    return {}
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
}
</style>
