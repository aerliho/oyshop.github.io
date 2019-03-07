/*
  状态更新方法对象
  */
import {
  RECEIVE_CITYPOSITION,
  RECEIVE_CITYDETAILEDINFO,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPLIST
} from './mutation-types'

export default {
  [RECEIVE_CITYPOSITION] (state, {cityPosition}) {
    state.cityPosition = cityPosition
    state.latitude = cityPosition.latitude
    state.longitude = cityPosition.longitude
  },
  [RECEIVE_CITYDETAILEDINFO] (state, {cityDetailedInfo}) {
    state.cityDetailedInfo = cityDetailedInfo
  },
  [RECEIVE_FOODTYPES] (state, {foodTypes}) {
    state.foodTypes = foodTypes
  },
  [RECEIVE_SHOPLIST] (state, {shopList}) {
    state.shopList = shopList
  }
}
