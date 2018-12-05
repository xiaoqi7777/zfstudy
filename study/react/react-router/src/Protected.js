
import React from 'react';
import {Redirect,Route} from 'react-router-dom';

export default function a({component:Component,...rest}){
  return <Route {...rest} render={(props)=>{
    return localStorage.getItem('login')?<Component {...props}/>:
    <Redirect to='/login' />
  }}>
  </Route>
}
// Component children render 区别

// Component 吐过登录就渲染这个组件 把其他属性变成一个对象
// 默认情况下 Route组件中应该传入的是 component = { 组件 }
// 如果添加功能 render={()=>{}} 
// render 和 component 唯一不同的是 render是一个函数 
// 他返回的结果会进行渲染

