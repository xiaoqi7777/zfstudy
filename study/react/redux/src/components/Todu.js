
import React from 'react';
import store from '../store'
import actions from '../store/actions/Todu'

export default class  Todu extends React.Component{
    inpu = React.createRef()
    state = {
      arr:store.getState().Todu
    }
    componentWillMount(){
      store.subscribe(()=>{
        this.setState({
          arr:store.getState().Todu
        })
      })
    }
    add = ()=>{
      console.log(store.getState().Todu)
      // this.inpu.current.value
      store.dispatch(actions.addTodu(this.inpu.current.value))
    }
    render(){
      return(
        <>
          <input type='text' ref={this.inpu}/>
          <div onClick={this.add}>增加</div>
          <ul>
            {this.state.arr.map((item,index)=>{
              return (<li key={index}>{item}</li>)
            })}
          </ul>

        </>
      )
    }
}

// <ul>
// {this.props.todos.map((item,key)=>(
//  <li key={key}>{item}</li>
// ))}
// </ul>