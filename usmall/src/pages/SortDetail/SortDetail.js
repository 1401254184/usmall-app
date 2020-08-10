import React, { Component } from 'react'
import{connect} from 'react-redux'
import{getgoods,requestGetGoodsAction}from '../../stroe'
import querystring from 'querystring'
import GoBack from '../../components/GoBack/GoBack' 
import './SortDetail.css'
class SortDetail extends Component {
    constructor(){
        super()
        this.state={
            catname:''
        }
    }
    goGoodsDetail(id){
        this.props.history.push('/goodsDetail?id='+id)
        }
    componentDidMount(){
        const fid=querystring.parse(this.props.location.search.slice(1))
        console.log(fid.fid)
        this.props.requestGetGoods(fid.fid)
        this.setState({
            catname:fid.catename
        })
    }
    render() {
        const{getgoods}=this.props
        return (
            <div className='list'>
                <header><GoBack></GoBack>{this.state.catname}</header>
                <ul>
            {
                getgoods.map(item=>{
                    return <li key={item.id} onClick={()=>this.goGoodsDetail(item.id)}>
                        <img src={this.$img+item.img} alt=""/>
                        <dl>
                            <dd className='goodsname'>{item.goodsname}</dd>
                            <dd className='price'>￥{item.price.toFixed(2)}</dd>
                        </dl>
                        <button className='btn'>立即抢购</button>
                        </li>
                })
            }</ul>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        getgoods:getgoods(state)
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        requestGetGoods:(fid)=>dispatch(requestGetGoodsAction(fid))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SortDetail)