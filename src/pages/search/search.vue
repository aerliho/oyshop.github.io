<template>
  <div class="search">
    <topHeader title="搜索"></topHeader>
    <div class="searchContent">
      <div class="search_label">
        <input type="text" placeholder="请输入商家或美食名称" name="searchRes" class="inputText"> <button class="searchBtn"><i class="iconfont iconsousuo"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from '../../components/topHeader/topHeader'
export default {
  name: 'search',
  components: {
    topHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  .search
    width 100%
    height 100%
    .searchContent
      padding 0.2rem 0
      background-color #f5f5f5
      margin-top 0.1rem
      .search_label
        display flex
        flex-wrap nowrap
        justify-content center
        .inputText
          width 80%
          border-radius 5px
          border 1px solid gray
          outline none
          height 0.6rem
          font-size 0.25rem
          padding-left 5px
        input::-webkit-input-placeholder
          font-size: 0.25rem;
        .searchBtn
          width 10%
          margin-left 5px
          border-radius 5px
          border none
          outline none
</style>
