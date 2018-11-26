import Counter from './Counter'
import Todu from './Todu'


function com(reducers){
  return function(state={},action){
    let obj = {};
    for(let key in reducers){
      obj[key] = reducers[key](state[key],action)
    }
    return obj
  }
}

export default com({
  Counter,
  Todu
})