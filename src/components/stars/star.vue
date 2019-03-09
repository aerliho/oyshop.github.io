<template>
  <div class="star" :class="'star-' + size">
    <span class="star-item" v-for="(sc, index) in starClasses" :class="sc" :key="index"></span>
  </div>
</template>

<script>
// 类名常量
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'

export default {
  props: {
    size: Number,
    score: Number
  },
  computed: {
    starClasses () {
      /*
      如评分为：
      4.2: 4 + 0 + 1
      4.5: 4 + 1 + 0
      */
      const {score} = this
      const scs = []
      // 向scs中添加n个'on'
      const scoreInt = Math.floor(score)
      for (let i = 0; i < scoreInt; i++) {
        scs.push(CLASS_ON)
      }
      // 向scs中添加0或1个'half'
      if (score * 10 - scoreInt * 10 >= 5) {
        scs.push(CLASS_HALF)
      }
      // 向scs中添加n个'off'
      while (scs.length < 5) {
        scs.push(CLASS_OFF)
      }
      // 'on'，'half'，'off'是定义显示星星图片的类名
      return scs
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 0.3rem
        height 0.3rem
        margin-right 0.3rem
        background-size 0.3rem 0.3rem
        &:last-child
          margin-right: 0
        &.on
          bg-image('./imgs/star48_on')
        &.half
          bg-image('./imgs/star48_half')
        &.off
          bg-image('./imgs/star48_off')
    &.star-36
      .star-item
        width 0.3rem
        height 0.3rem
        margin-right 0.1rem
        background-size 0.3rem 0.3rem
        &:last-child
          margin-right 0
        &.on
          bg-image('./imgs/star36_on')
        &.half
          bg-image('./imgs/star36_half')
        &.off
          bg-image('./imgs/star36_off')
    &.star-24
      .star-item
        width 0.2rem
        height 0.2rem
        margin-right 0.015rem
        background-size 0.2rem 0.2rem
        &:last-child
          margin-right 0
        &.on
          bg-image('./imgs/star24_on')
        &.half
          bg-image('./imgs/star24_half')
        &.off
          bg-image('./imgs/star24_off')
</style>
