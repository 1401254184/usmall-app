import React, { Component } from 'react'
import {Link}from 'react-router-dom'
import'./Login.css'
import {requestLogin} from '../../util/request'
export default class Login extends Component {
    constructor(){
        super()
        this.state={
            user:{
            phone:'',
            password:'',}
        }
    }
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    login(){
        requestLogin(this.state.user).then(res=>{
            if(res.data.code===200)
            {
                sessionStorage.setItem("isLogin",res.data.list.uid)
                alert(res.data.msg)
                this.props.history.push('/index/home')
            }else{
                alert(res.data.msg)
            }
        })
    }
    render() {
        const {user}=this.state
        return (
            <div className='login'>
                <div className='login-header'>登录 <Link to='/reg'>注册</Link></div>
                <div className='login-title'>
                <div>手机号：<input type="text" name="" id="" value={user.phone} onChange={(e)=>this.changeUser(e,'phone')}/></div>
                <div>密码：<input type="text" name="" id="" value={user.password} onChange={(e)=>this.changeUser(e,'password')}/></div>
                     <p>忘记密码</p>
                    <button onClick={()=>this.login()}>登录</button>
                </div>
            </div>
        )
    }
}
