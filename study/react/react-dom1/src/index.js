// 导入的React名字必须大写
import React from 'react';

// import {render} from 'react-dom';

let ReactDom = require('react-dom');
ReactDom.render()
// jsx 语法 jacascript + html (html加js的混写)

// let h1 = <h1 id="hello">hello world </h1>;//他会用babel进行转化  
//转化成React.createElement()写法 是语法糖
//React.createElement('h1',{id:'hello'},['hello world',React.createElement('span',null,'你好')])

// jsx -> React.createElement() -> vnode (对象 对象可以描述当前元素) -> 渲染到页面上