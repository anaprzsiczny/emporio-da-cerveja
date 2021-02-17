import { ActionTypes, Beers } from "./types"


const initialStateBeer: Beers[] = []

function reducerBeer(state = initialStateBeer, action: any) {
  switch(action.type){
    case ActionTypes.POST_BEERS:
      state.push(action.payload)
      return state
    case ActionTypes.DELETE_BEERS:
      state.map((item: Beers, index) => {
        if(item.id === action.payload.id){
          state.splice(index, 1)
        }
      })
      return state
    case ActionTypes.ADD_BEERS:
      state.map((item: Beers) => {
        if(item.id === action.payload.id){
          item.quantidade++
        }
      })
      return state
    case ActionTypes.REMOVE_BEERS:
      state.map((item: Beers, index) => {
        if(item.id === action.payload.id){
          if(item.quantidade > 0){
            item.quantidade--
          } else {
            state.splice(index, 1)
          }
        }
      })
      return state
    default:
      return state
  }
}

export default reducerBeer