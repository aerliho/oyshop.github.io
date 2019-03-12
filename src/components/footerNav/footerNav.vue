<template>
  <div class="footer" v-show="this.$route.path === '/home'||this.$route.path === '/search'||this.$route.path === '/order'||this.$route.path === '/personal'">
    <ul class="myfooternav">
      <li class="footnav" :class="{onfootnav: '/home' === $route.path}" @click="goTo('/home')"><i class="iconfont iconhome-full footicon"></i><span>外卖</span></li>
      <li class="footnav" :class="{onfootnav: '/search' === $route.path}" @click="goTo('/search')"><i class="iconfont iconsousuo footicon"></i><span>搜索</span></li>
      <li class="footnav" :class="{onfootnav: '/order' === $route.path}" @click="goTo('/order')"><i class="iconfont icondingdan2 footicon"></i><span>订单</span></li>
      <li class="footnav" :class="{onfootnav: '/personal' === $route.path}" @click="goTo('/personal')"><i class="iconfont icongeren2 footicon"></i><span>个人</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'footerNav',
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  .footer
    position fixed
    z-index 100
    width 100%
    bottom 0
    box-shadow 0 0.1rem 0.2rem black
    color rgb(85, 85, 85)
    background-color white
    .myfooternav
      display flex
      justify-content space-around
      .footnav
        display flex
        flex-direction column
        text-align center
        width 25%
        padding 0.1rem 0
        &.onfootnav
          color: rgb(0, 164, 240)
        .footicon
          font-size 0.44rem
        span
          font-size 0.2rem
          margin-top 0.05rem
</style>
