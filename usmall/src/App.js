import React from 'react'
import {Switch,Route,Redirect}from 'react-router-dom'
 import Login from './pages/Login/Login'
 import Index from './pages/Index/Index'
 import Reg from './pages/Reg/Reg'
 import Mine from './pages/Mine/Mine'
 import Cart from './pages/Cart/Cart'
 import GoodsDetail from './pages/GoodsDetail/GoodsDetail'
 import Sort from './pages/Sort/Sort'
 import SortDetail from './pages/SortDetail/SortDetail'
 import './assets/css/reset.css'
export default function App() {
  return (
    <div>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/reg' component={Reg}></Route>
        <Route path='/index' component={Index}></Route>
        <Route path='/mine' component={Mine}></Route>
        <Route path='/cart' component={Cart}></Route>
        <Route path='/goodsDetail' component={GoodsDetail}></Route>
        <Route path='/sort' component={Sort}></Route>
        <Route path='/sortDetail' component={SortDetail}></Route>
        <Redirect to='/login'></Redirect>
      </Switch>
    </div>
  )
}
