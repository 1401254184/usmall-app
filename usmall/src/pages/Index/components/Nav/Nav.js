import React from 'react'
import navimg from '../../../../assets/img/img/home/1.jpg'
import './Nav.css'
export default function Nav() {
    return (
        <div className='Nav'>
            <ul>
                <li><img src={navimg} alt=""/>限时抢购</li>
                <li><img src={navimg} alt=""/>积分商城</li>
                <li><img src={navimg} alt=""/>联系我们</li>
                <li><img src={navimg} alt=""/>商品分类</li>
            </ul>
        </div>
    )
}
