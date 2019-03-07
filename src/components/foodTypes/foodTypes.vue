<template>
  <nav class="msite_nav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./imgs/nav/1.jpg">
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./imgs/nav/2.jpg">
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./imgs/nav/3.jpg">
            </div>
            <span>美食</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./imgs/nav/4.jpg">
            </div>
            <span>简餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./imgs/nav/5.jpg">
            </div>
            <span>新店特惠</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./imgs/nav/6.jpg">
            </div>
            <span>准时达</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./imgs/nav/7.jpg">
            </div>
            <span>预订早餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./imgs/nav/8.jpg">
            </div>
            <span>土豪推荐</span>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./imgs/nav/9.jpg">
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./imgs/nav/10.jpg">
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./imgs/nav/11.jpg">
            </div>
            <span>美食</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./imgs/nav/12.jpg">
            </div>
            <span>简餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./imgs/nav/13.jpg">
            </div>
            <span>新店特惠</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./imgs/nav/14.jpg">
            </div>
            <span>准时达</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./imgs/nav/1.jpg">
            </div>
            <span>预订早餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./imgs/nav/2.jpg">
            </div>
            <span>土豪推荐</span>
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </nav>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'foodTypes',
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  .msite_nav
    margin-top 0.1rem
    background #fff
    .swiper-container
      width 100%
      height 100%
      padding-bottom 0.3rem
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            text-decoration none
            .food_container
              display block
              width 100%
              text-align center
              img
                display inline-block
                width 1rem
                height 1rem
            span
              display block
              text-align center
              font-size 0.2rem
              color #666
      .swiper-pagination
        position absolute
        bottom -0.1rem
        >span.swiper-pagination-bullet-active
          background #00a4f0
</style>
