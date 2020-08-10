import React, { Component } from 'react'
import{connect} from 'react-redux'
import{cartlist,requestCartListAction} from '../../stroe'
import GoBack from '../../components/GoBack/GoBack'
import store from '../../assets/img/store.png'
import './Cart.css'
 class Cart extends Component {
     componentDidMount(){
         const uid=sessionStorage.getItem('isLogin')
        this.props.requestCartList(uid)
        }
    render() {
        const{cartlist}=this.props
        return (
            <div className='cart'>
                <header><GoBack></GoBack>购物车</header>
                <ul>
                    {cartlist.map(item=>{
                        return <li key={item.id}>
                            <p className='store_title'><img src={store} alt=""/><span>杭州宝悦区仓</span> </p>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        cartlist:cartlist(state)    
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        requestCartList:(uid)=>dispatch(requestCartListAction(uid))
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Cart)