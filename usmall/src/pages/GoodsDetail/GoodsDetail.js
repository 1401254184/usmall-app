import React, { Component } from 'react'
import querystring from 'querystring'
import { connect } from 'react-redux';
import{goodsDetail,requestGoodsDetailAction}from '../../stroe'
 class GoodsDetail extends Component {
componentDidMount(){
    const id=querystring.parse(this.props.location.search.slice(1))
    this.props.requestGoodsDetail(id)
   
}
    render() {
        const{goodsDetail}=this.props
        return (
            <div>
                {goodsDetail.map(item=>{
                   return   <div key={item.id}>{item.description}</div>
                })
              }
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        goodsDetail:goodsDetail(state)
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        requestGoodsDetail:(id)=>dispatch(requestGoodsDetailAction(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GoodsDetail)