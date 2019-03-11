/*
  通过mutation间接更新状态的对象
  */

import {
  RECEIVE_CITYPOSITION,
  RECEIVE_CITYDETAILEDINFO,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPLIST,
  RECEIVE_CAPTCHAS
} from './mutation-types'

import {
  reqCityPosition,
  reqCityDetailedInfo,
  reqFoodTypes,
  reqShopList,
  reqCaptchas
} from '../api'

export default {
  // 异步获取城市位置
  async getCityPosition ({commit}) {
    const cityPosition = await reqCityPosition()
    commit(RECEIVE_CITYPOSITION, {cityPosition})
  },
  // 异步获取城市详细信息
  async getCityDetailedInfo ({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const cityDetailedInfo = await reqCityDetailedInfo(geohash)
    commit(RECEIVE_CITYDETAILEDINFO, {cityDetailedInfo})
  },
  // 异步获取食品分类列表
  async getFoodTypes ({commit}) {
    const foodTypes = await reqFoodTypes()
    commit(RECEIVE_FOODTYPES, {foodTypes})
  },
  // 异步获取商家列表
  async getShopList ({commit, state}) {
    const shopList = await reqShopList(state.latitude, state.longitude)
    commit(RECEIVE_SHOPLIST, {shopList})
  },
  // 异步获取验证码
  async getCaptchas ({commit}) {
    const captchas = await reqCaptchas()
    commit(RECEIVE_CAPTCHAS, {captchas})
  }
}
