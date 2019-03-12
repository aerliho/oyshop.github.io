<template>
  <div class="order">
    <topHeader title="订单列表"></topHeader>
    <div class="orderContent">
      <div class="notLogin" v-if="!userInfo.id">
        <img src="./imgs/noLogin.png" width="70%" height="auto">
        <p class="orderP">登录后查看外卖订单</p>
        <router-link to="/loginRegister"><button class="loginButton">立即登录</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from '../../components/topHeader/topHeader'
import { mapState } from 'vuex'
export default {
  name: 'order',
  components: {
    topHeader
  },
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  .order
    width 100%
    height 100%
    .orderContent
      text-align center
      .notLogin
        width 100%
        height 100%
        .orderP
          font-size 0.25rem
          margin 0
        .loginButton
          outline none
          padding 0.15rem 0.3rem
          border none
          border-radius 0.15rem
          font-size 0.3rem
          color white
          background-color #57b1f7
</style>
