
import React from 'react';
import redux from '../redux'

function reducer(state = {number:0},action){
  switch(action.type){
    case 'ADD':
    return {number:state.number+action.count}
  }
  return state
}
let store = redux(reducer)
export default class  Counter extends React.Component{
    state = {
      number:store.getState().number
    }
    componentWillMount(){
      store.subscribe(()=>{
        this.setState({
          number:store.getState().number
        })
      })
    }
    add = ()=>{
      console.log('1')
      store.dispatch({type:'ADD',count:1})
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