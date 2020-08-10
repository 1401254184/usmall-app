import React, { Component } from 'react'
import querystring from 'querystring'
import { connect } from 'react-redux';
import { goodsDetail, requestGoodsDetailAction } from '../../stroe'
import GoBack from '../../components/GoBack/GoBack'
import { cartAdd } from '../../util/request'
import './GoodsDetail.css'
class GoodsDetail extends Component {
    constructor() {
        super()
        this.state = {
            isShow: false,
            cart: {
                uid: "",
                goodsid: '',
                num: '1'
            }
        }
    }
    componentDidMount() {
        const id = querystring.parse(this.props.location.search.slice(1))
        this.props.requestGoodsDetail(id)
    }
    changeShow2() {
        this.setState({
            isShow: true,
            cart: {
                ...this.state.cart,
                uid: sessionStorage.getItem("isLogin"),
                goodsid: this.props.goodsDetail[0].id
            }
        })
    }
    changeShow1() {
        this.setState({
            isShow: false
        })
    }
    add() {
        this.setState({
            cart: {
                ...this.state.cart,
                uid: sessionStorage.getItem("isLogin"),
                goodsid: this.props.goodsDetail[0].id
            }
        })
        console.log(this.state.cart)
        cartAdd(this.state.cart).then(res => {
            alert(res.data.msg)
            this.setState({
                isShow: false
            })
        })
    }
    render() {
        const { goodsDetail } = this.props
        return (
            <div className='GoodsDetail'>
                <header><GoBack></GoBack>商品详情</header>
                {goodsDetail.map(item => {
                    return <div key={item.id}><img src={this.$img + item.img} alt="" className='navimg' /><div className="nav"><div className="detail"><p className='goodsname'>{item.goodsname}</p>
                        <div><span className='price'>￥{item.price}</span>{item.ishot === 1 ? <span className='hot'>热卖</span> : null}{item.isnew === 1 ? <span className='hot'>新品</span> : null}</div>
                        <p className='market_price'>￥{item.market_price}</p>
                    </div></div><div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                        {this.state.isShow ? <div className='addshop'><div className='shopz' onClick={() => this.changeShow1()}></div><div className='shop'><img src={this.$img + item.img} alt="" className='shopimg' align='texttop' /><span>{item.goodsname}</span>
                            <p>{item.specsname}</p>
                            {JSON.parse(item.specsattr).map((item, index) => {
                                return <span key={index} className='specs'>{item}</span>
                            })}
                            <div className='add'><button onClick={() => this.add()}>加入购物车</button></div>
                        </div></div> : <footer><div className='footer1' onClick={() => this.changeShow2()}>加入购物车</div></footer>}
                    </div>

                })
                }

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        goodsDetail: goodsDetail(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestGoodsDetail: (id) => dispatch(requestGoodsDetailAction(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GoodsDetail)