<template>
<div>
    <AppContent class="demo" v-for="(page, index) in pageArray" :key="index">demo {{ page.name }}</AppContent>

</div>
</template>

<script>
import AppContent from '@/components/global/AppContent'

export default {
  components: {
    AppContent
  },
  props: {},
  data () {
    return {
      pageArray: [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }, { name: '6' }, { name: '7' }, { name: '8' }, { name: '9' }, { name: '10' }, { name: '11' }, { name: '12' }, { name: '13' }, { name: '14' }, { name: '15' }, { name: '16' }, { name: '17' }, { name: '18' }]

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
.demo {
  font-size: 20px;
  background-color: yellow;
    height: 50px;
}
</style>
