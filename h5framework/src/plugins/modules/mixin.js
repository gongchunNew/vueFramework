/**
 * vue mixin
 */

import Vue from 'vue'

Vue.mixin({
  data () {
    return {
      globalConfig: '111111'
    }
  },
  methods: {
    // 页面跳转
    go (router) {
      if (typeof router === 'string') {
        this.$router.push({
          name: router
        })
      } else {
        this.router.push(router)
      }
    },
    // 返回到上一页
    back () {
      this.$router.go(-1)
    },
    // 指定路由名字跳转，带query参数(在url地址栏显示)
    goWithQuery (name, dataObj) {
      this.$router.push({
        name: name,
        query: dataObj
      })
    },
    // 指定路由名字跳转，带params参数(不在url地址栏显示)
    goWithParams (name, dataObj) {
      this.$router.push({
        name: name,
        params: dataObj
      })
    }
  }
})
