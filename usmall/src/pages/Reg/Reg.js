import React, { Component } from 'react'
import GoBack from '../../components/GoBack/GoBack'
import {reuqestRegister} from '../../util/request'
export default class Reg extends Component {
    constructor(){
        super()
        this.state={
            user:{
            phone:'',
            nickname:'',
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
    reg(){
        reuqestRegister(this.state.user).then(res=>{
            if(res.data.code===200){
                alert(res.data.msg)
                this.props.history.push('/login')
            }else{
                 alert(res.data.msg)
            }
        })
       
        
    }
    render() {
        const {user}=this.state
        return (
            <div className='login'>
            <div className='login-header'><GoBack></GoBack>注册</div>
            <div className='login-title'>
                <div>手机号：<input type="text" name="" id="" value={user.phone} onChange={(e)=>this.changeUser(e,'phone')}/></div>
                <div>昵称：<input type="text" name="" id="" value={user.nickname} onChange={(e)=>this.changeUser(e,'nickname')}/></div>
                <div>密码：<input type="text" name="" id="" value={user.password} onChange={(e)=>this.changeUser(e,'password')}/></div>
                <button onClick={()=>this.reg()}>注册</button>
            </div>
        </div>
        )
    }
}
