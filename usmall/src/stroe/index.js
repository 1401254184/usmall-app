import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import{requestBanner, requestGoods,requestGoodsInfo,requestCateList,requestGetGoods,reuqestRegister,requestCartList}from '../util/request'
// 初始状态
const initState={
    banner:[],//轮播图列表
    goodslist:[],//限时秒杀
    goodsDetail:[],//商品详细
    catelist:[],//分类列表
    getgoods:[],//分类商品
    cartlist:[],//购物车列表
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
const changeCateAction=(arr)=>{
    return{type:'changeCate',list:arr}
}
const changeGetGoodsAction=(arr)=>{
    return{type:"changeGetGoods",list:arr}
}
const changeCartListAction=(arr)=>{
    return{type:"changeCartList",list:arr}
}
// const changeRegister=(arr)=>
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
        // if(goodsDetail.length>0){
        //     return;
        // }
        requestGoodsInfo(id).then(res=>{
            dispatch(changeGoodsDetailAction(res.data.list))
        })
    }
}
// 分类
export const requestCateAction=()=>{
    return(dispatch,getState)=>{
        const{catelist}=getState()
        if(catelist.length>0){
            return;
        }
        requestCateList().then(res=>{
            dispatch(changeCateAction(res.data.list))
        })
    }
}
//分类商品
export const requestGetGoodsAction=(fid)=>{
    return(dispatch,getState)=>{
        const{getgoods}=getState()
        if(getgoods.length>0){
            return;
        }
        requestGetGoods({fid:fid}).then(res=>{
            dispatch(changeGetGoodsAction(res.data.list))
        })
    }
}
// 购物车列表
export const requestCartListAction=(uid)=>{
    return(dispatch,getState)=>{
        const{cartlist}=getState()
        if(cartlist.length>0){
            return;
        }
        requestCartList({uid:uid}).then(res=>{
            dispatch(changeCartListAction(res.data.list))
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
                case 'changeCate':
                    return{
                        ...state,
                        catelist:action.list
                    }
                    case 'changeGetGoods':
                        return{
                            ...state,
                            getgoods:action.list
                        }
                    case 'changeCartList':
                        return{
                            ...state,
                            cartlist:action.list
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
export const catelist=(state)=>state.catelist
export const getgoods=(state)=>state.getgoods
export const cartlist=(state)=>state.cartlist
export default store