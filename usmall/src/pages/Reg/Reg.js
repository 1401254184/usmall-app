import React, { Component } from 'react'
import GoBack from '../../components/GoBack/GoBack'
export default class Reg extends Component {
    render() {
        return (
            <div className='login'>
            <div className='login-header'><GoBack></GoBack>注册</div>
            <div className='login-title'>
                <div>手机号：<input type="text" name="" id=""/></div>
                <div>昵称：<input type="text" name="" id=""/></div>
                <div>密码：<input type="text" name="" id=""/></div>
                <button>注册</button>
            </div>
        </div>
        )
    }
}
