<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/ratings">评论</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>

  </div>
</template>

<script>
import header from './components/header/header'
import {urlParse} from './common/js/util'
export default {
  name: 'App',
  data: function () {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse()
          return queryParam.id
        })()
      }
    }
  },
  components: {
    'v-header': header
  },
  created: function () {
    let currentVue = this
    this.$axios.get('/api/seller')
      .then(function (response) {
        currentVue.seller = response.data.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex 1
      text-align center
      a
        font-size 14px
        color rgb(77,85,93)
        &.router-link-exact-active
          &.router-link-active
            color rgb(240,20,20)
</style>
