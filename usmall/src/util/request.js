import axios from 'axios'
axios.interceptors.response.use(res=>{
    console.log(res)
    return res
})
// 轮播图
export const requestBanner=()=>{
    return axios({
        url:'/api/bannerlist',
        method:"get"
    })
}
// 限时秒杀
export const requestGoods=()=>{
    return axios({
        url:'/api/getindexgoods',
        method:'get'
    })
}
// 一个商品的信息
export const requestGoodsInfo=(params)=>{
    return axios({
        url:'/api/getgoodsinfo',
        method:'get',
        params:params
    })
}