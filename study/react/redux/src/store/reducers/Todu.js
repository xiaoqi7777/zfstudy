import * as Types from '../action-types'
 function Todu(state = [],action){
  switch(action.type){
    case Types.ADD_TODO:
    console.log(action.addTodu)
    return [...state,action.addTodu]
  }
  return state
}
export default Todu
