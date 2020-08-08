import React, { Component } from 'react'
import {connect} from 'react-redux'
import{NavLink}from 'react-router-dom'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import List from './components/List/List'
import './Index.css'
import{banner,requestBannerAction,goodslist,requestGoodsAction}from '../../stroe'
class Index extends Component {
    
    componentDidMount(){
        this.props.requestBanner()
        // console.log(this.props)
        this.props.requestGoods()
        
    }
    goGoodsDetail(id){
    this.props.history.push('/goodsDetail?id='+id)
    }
    render() {
        return (
            <div>
            <Header></Header>
            <Banner banner={this.props.banner}></Banner>
            <Nav ></Nav>
            <List goodslist={this.props.goodslist}  goGoodsDetail={(e)=>this.goGoodsDetail(e)}></List>

            <div className="footer">
                <ul>
                    <li ><NavLink activeClassName='active1' to='/index/home' className='a1'>首页</NavLink></li>
                    <li><NavLink activeClassName='active2' to='/sort' className='a2'>分类</NavLink></li>
                    <li><NavLink activeClassName='active3' to='/cart' className='a3'>购物车</NavLink></li>
                    <li><NavLink activeClassName='active4' to='/mine' className='a4'>我的</NavLink></li>
                </ul>
                
            </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        banner:banner(state),
        goodslist:goodslist(state)
    }
}
const mapDispatchToProps=dispatch=>{
    return{
      requestBanner:()=>dispatch(requestBannerAction()),
      requestGoods:()=>dispatch(requestGoodsAction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)