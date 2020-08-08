import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import{requestBanner, requestGoods,requestGoodsInfo}from '../util/request'
// 初始状态
const initState={
    banner:[],//轮播图列表
    goodslist:[],//限时秒杀
    goodsDetail:[]//商品详细
}
const changeBannerAction=(arr)=>{
    return{type:"changeBanner",list:arr}
}
const changeGoodsAction=(arr)=>{
    return{type:"changeGoods",list:arr}
}
const changeGoodsDetailAction=(arr)=>{
    return{type:'changeGoodsDetail',list:arr}
}
// 一进页面，就要发起一个请求
// 轮播
export const requestBannerAction=()=>{
    // 异步操作
    return(dispatch,getState)=>{
        // 缓存层 有了数据就不在发起二次请求
        const {banner}=getState()
        if(banner.length>0){
            return;
        }
        // 发请求
        requestBanner().then(res=>{
            dispatch(changeBannerAction(res.data.list))
        })
    }
}
// 秒杀
export const requestGoodsAction=()=>{
    // 异步
    return(dispatch,getState)=>{
        // 缓存层
        const {goodslist}=getState()
        if(goodslist.length>0){
            return;
        }
        // 发请求
        requestGoods().then(res=>{
            dispatch(changeGoodsAction(res.data.list[0].content))
        })
    }
}
// 详情
export const requestGoodsDetailAction=(id)=>{
    // 
    return(dispatch,getState)=>{
        const{goodsDetail}=getState()
        if(goodsDetail.length>0){
            return;
        }
        requestGoodsInfo(id).then(res=>{
            dispatch(changeGoodsDetailAction(res.data.list))
        })
    }
}
// reducer 修改state
const reducer=(state=initState,action)=>{
    switch (action.type){
        case 'changeBanner':
            return{
                ...state,
                banner:action.list
            }
        case 'changeGoods':
            return{
                ...state,
                goodslist:action.list
            }
            case 'changeGoodsDetail':
                return{
                    ...state,
                    goodsDetail:action.list
                }
            default:
                return state
    }
}


const store=createStore(reducer,applyMiddleware(thunk))
// 导出数据
export const banner=(state)=>state.banner
export const goodslist=(state)=>state.goodslist
export const goodsDetail=(state)=>state.goodsDetail
export default store