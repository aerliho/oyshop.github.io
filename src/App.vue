<template>
  <div id="app">
    <router-view/>
    <footerNav/>
  </div>
</template>

<script>
import footerNav from './components/footerNav/footerNav'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    footerNav
  },
  created () {
    this.getCityPosition()
  },
  methods: {
    ...mapActions(['getCityPosition'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
#app
  width 100%
  height 100%
</style>
