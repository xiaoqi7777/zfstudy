
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch,Redirect,Link} from 'react-router-dom'

import Home from './views/Home'
import User from './views/User'
import Profile from './views/Profile'
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component{

  render(){
    return(
      <Router>
      <div>
        {/* Switch组件匹配到一个后就不会继续匹配了 */}
        <Link to='/'>首页</Link>
        <Link to='/profile'>个人中心</Link>
        <Link to='/user'>用户</Link>

        <Switch>
          <Route path="/"  exact={true} component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/user" component={User} />
          {/* <Route component={User} /> */}
          <Redirect to="/" /> 
        </Switch>
      </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />,window.root)

/*
  HashRouter / BrowserRouter
  在引入的时候 起别名
  HashRouter as rouer

  1、默认情况下 从上到下匹配 不严格匹配
      exact={true} 严格匹配
    若不写path 路径默认是 /
  2、Switch组件匹配到一个后就不会继续匹配了
  3、Redirect重定向


*/
