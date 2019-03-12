/*
  状态更新方法对象
  */
import {
  RECEIVE_CITYPOSITION,
  RECEIVE_CITYDETAILEDINFO,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPLIST,
  RECEIVE_CAPTCHAS,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
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
  },
  [RECEIVE_CAPTCHAS] (state, {captchas}) {
    state.captchas = captchas
  },
  [RECEIVE_USERINFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USERINFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  }
}
