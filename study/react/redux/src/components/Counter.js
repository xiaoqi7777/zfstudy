
import React from 'react';
import store from '../store'
import actions from '../store/actions/Counter'

export default class  Counter extends React.Component{
    state = {
      number:store.getState().Counter.number
    }
    componentWillMount(){
      store.subscribe(()=>{
        this.setState({
          number:store.getState().Counter.number
        })
      })
    }
    add = ()=>{
      console.log('1',store.getState())
      store.dispatch(actions.add(2))
    }
    render(){
      return(
        <>
          <span>{this.state.number}</span>
          <div onClick={this.add}>开始的啊</div>
        </>
      )
    }
}