/*
  各部分接口请求函数模块
 */

import ajax from './ajax'
const BASE_URL = '/api'
// 获取城市定位
export const reqCityPosition = () => ajax(BASE_URL + '/v1/cities', {type: 'guess'})
// 根据经纬度详细定位
export const reqCityDetailedInfo = (geohash) => ajax(`${BASE_URL}/v2/pois/${geohash}`)
// 食品分类列表
export const reqFoodTypes = () => ajax(BASE_URL + '/v2/index_entry')
// 获取商铺列表
export const reqShopList = (latitude, longitude) => ajax(BASE_URL + '/shopping/restaurants', {latitude, longitude})
// 获取登录的验证码图片
export const reqCaptchas = () => ajax(BASE_URL + '/v1/captchas', {}, 'post')
// 用户密码登录
// eslint-disable-next-line
export const reqPwdLogin = ({username, password, captcha_code}) => ajax(BASE_URL + '/v2/login', {username, password, captcha_code}, 'post')
// 获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/v1/user')
// 退出登录
export const reqLoginOut = () => ajax(BASE_URL + '/v2/signout')
