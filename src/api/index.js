import axios from '@/axios.js'

var api = {
  // 热门搜索
  getSearchHotWord (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  // 联想搜索输入框
  getSearchList (params) {
    return axios.get('/api/meituan/header/search.json', params)
  },
  // 主页左侧分类menu
  getMenuList (params) {
    return axios.get('/api/meituan/index/nav.json', params)
  },
  // 主页下方推荐部分
  getResultProducts (params) {
    return axios.get('/api/meituan/index/resultsByKeywords.json', params)
  },
  // 产品展示列表
  getProductsList (params) {
    return axios.get('/api/meituan/list/goodsList.json', params)
  },
  // 热门城市
  getHotCity (params) {
    return axios.get('/api/meituan/city/hot.json', params)
  },
  // 最近搜索城市
  getRecentCity (params) {
    return axios.get('/api/meituan/city/recents.json', params)
  },
  // 获取省份
  getProvinceList (params) {
    return axios.get('/api/meituan/city/province.json', params)
  },
  // 定位
  getCurPosition (params) {
    return axios.get('/api/meituan/city/getPosition.json', params)
  },
  // 城市
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  }
}
export default api
