<template>
  <div class="top_con">
    <div class="top">
      <div class="topHeader">
        <slot name="left"></slot>
        <span class="header_title">
          <span class="ellipsis"><i class="iconfont icondingwei-copy" style="color: #1296db;font-size: 0.3rem;" v-show="$route.path == '/home'"></i> {{ title }}</span>
        </span>
        <slot name="right"></slot>
      </div>
    </div>
    <div class="some_blank">title</div>
  </div>
</template>
<script>
export default {
  name: 'topHeader',
  props: ['title']
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
  .some_blank
    width 100%
    padding 0.2rem 0
    font-size 0.3rem
  .top
    position fixed
    z-index 100
    width 100%
    background-color white
    top 0
    .topHeader
      display flex
      justify-content space-around
      align-items center
      width 100%
      z-index 200
      top 0
      box-shadow 0 -0.1rem 0.2rem black
      width 100%
      text-align center
      flex-wrap nowrap
      .header_title
        display inline-block
        padding 0.2rem 0
        font-size 0.3rem
        width 50%
        .ellipsis
          display block
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
</style>
