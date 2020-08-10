import React, { Component } from 'react'
import {connect} from 'react-redux'
import {catelist,requestCateAction}from '../../stroe'
import Sortlist from './components/Sortlist'
import {requestCateList} from '../../util/request'
import {NavLink}from 'react-router-dom'
import './Sort.css'
 class Sort extends Component {
     constructor(){
         super()
         this.state={
             n:0,
             children:[]
         }
     }
     componentDidMount(){
         this.props.requestCate()

         console.log(this.props.catelist)
         requestCateList().then(res=>{
               this.setState({
            children:res.data.list[0].children
        })
         })
       
     }
changeN(index,children){
    this.setState({
        n:index,
        children:children
    })
    console.log(this.state.children)
}
goDetail(fid,catename){
    this.props.history.push('/sortdetail?fid='+fid+'&catename='+catename)
}
    render() {
        const{catelist}=this.props
        const {n}=this.state
        return (
            <div className='cate'>
                <header>分类</header>
                <div className='left'>
                {catelist.map((item,index)=>{
                    return <div key={item.id}><span onClick={()=>this.changeN(index,item.children)} className={n===index?'select':''}>{item.catename}</span>
                    </div>
                })}</div>
                <div className="right">
                    <Sortlist children={this.state.children} goDetail={(e,m)=>this.goDetail(e,m)}></Sortlist>
                </div>

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
        catelist:catelist(state)
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        requestCate:()=>dispatch(requestCateAction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sort) 