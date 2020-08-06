import React, { Component } from 'react'
import {Link}from 'react-router-dom'
import'./Login.css'
export default class Login extends Component {
    render() {
        return (
            <div className='login'>
                <div className='login-header'>登录 <Link to='/reg'>注册</Link></div>
                <div className='login-title'>
                    <div>账号：<input type="text" name="" id=""/></div>
                    <div>密码：<input type="text" name="" id=""/></div>
                     <p>忘记密码</p>
                    <button>登录</button>
                </div>
            </div>
        )
    }
}
