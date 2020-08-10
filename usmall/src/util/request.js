import axios from 'axios'
import qs from 'qs'
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
// 获取分类
export const requestCateList=()=>{
    return axios({
        url:'/api/getcatetree',
        method:"get"
    })
}
// 获取分类商品
export const requestGetGoods=(params)=>{
    return axios({
        url:'/api/getgoods',
        method:'get',
        params:params
    })
}
// 注册
export const reuqestRegister=(data)=>{
    return axios({
        url:'/api/register',
        method:'post',
        data:qs.stringify(data) 
    })
}
//登录
export const requestLogin=(data)=>{
    return axios({
        url:"/api/login",
        method:"post",
        data:qs.stringify(data)
    })
}
// 购物车添加
export const cartAdd=(data)=>{
    return axios({
        url:"/api/cartadd",
        method:"post",
        data:qs.stringify(data)
    })
}
// 购物车列表
export const requestCartList=(params)=>{
    return axios({
        url:'/api/cartlist',
        method:"get",
        params:params
    })
}
