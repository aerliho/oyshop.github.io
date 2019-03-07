<template>
  <div class="loginRegister">
    <topHeader title="点击返回" @click.native="$router.back()">
      <span class="loginBack" slot="left"><i class="iconfont iconjiantou-zuo"></i></span>
      <span slot="right"></span>
    </topHeader>
    <div class="loginContent">
      <h3>OY外卖</h3>
    </div>
  </div>
</template>

<script>
import topHeader from '../../components/topHeader/topHeader'
export default {
  name: 'loginRegister',
  components: {
    topHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  .loginRegister
    width 100%
    height 100%
    .loginBack
      font-size 0.3rem
    .loginContent
      width 100%
      height 100%
      text-align center
</style>
