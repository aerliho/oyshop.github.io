/*
  各部分接口请求函数模块
 */

import ajax from './ajax'
const BASE_URL = '/api'
// 获取城市定位
export const reqCityPositioning = () => ajax(BASE_URL + '/v1/cities', {type: 'guess'})
// 根据经纬度详细定位
export const reqCityDetailedInfo = (geohash) => ajax(`${BASE_URL}/v2/pois/${geohash}`)
// 食品分类列表
export const reqFoodTypes = () => ajax(BASE_URL + '/v2/index_entry')
// 获取商铺列表
export const reqShopList = (latitude, longitude) => ajax(BASE_URL + '/shopping/restaurants', {latitude, longitude})
