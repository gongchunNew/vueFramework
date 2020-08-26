<template>
  <div class="home">
    <div class="home1">home</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss">
.home{
  @include display-flex;
  color:$color-theme;
  .home1{
    font-size: 16px;
  }
}
</style>
