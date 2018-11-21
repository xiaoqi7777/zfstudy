// 组件的特点 和 好处 
// 方便复用

// react中 函数就是一个组件(组件名,必须是大写)，和jsx元素 react元素 来进行区分
// react看到大写就是组件 小写就是jsx元素
import  React from 'react';

import ReactDOM from 'react-dom';


function Clock(params) {
  return <h1>当前时间</h1>
}

// ReactDOM.render(Clock(),window.root)
// ReactDOM.render(<Clock></Clock>,window.root)
// 可以和jsx元素 混用
ReactDOM.render(
  <div>
  <Clock></Clock>
  <Clock></Clock>
  </div>
  ,window.root)
