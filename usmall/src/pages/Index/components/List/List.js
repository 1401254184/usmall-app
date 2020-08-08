import React,{Component} from 'react'
import './List.css'
export default function List(props) {
    const {goodslist,goGoodsDetail}=props
    

    return (
        <div className='list'>
            <ul>
            {
                goodslist.map(item=>{
                    return <li key={item.id} onClick={()=>goGoodsDetail(item.id)}>
                        <img src={Component.prototype.$img+item.img} alt=""/>
                        <dl>
                            <dd className='goodsname'>{item.goodsname}</dd>
                            <dd className='price'>￥{item.price.toFixed(2)}</dd>
                        </dl>
                        <button>立即抢购</button>
                        </li>
                })
            }</ul>
        </div>
    )
}
