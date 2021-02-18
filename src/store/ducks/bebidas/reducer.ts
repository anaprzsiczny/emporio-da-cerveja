import { ActionTypes, Beers } from "./types"


const initialStateBeer = {
  arrayBebidas: []
}

function reducerBeer(state = initialStateBeer, action: any) {
  const bebidas: any = state.arrayBebidas
  switch(action.type){
    case ActionTypes.POST_BEERS:
      bebidas.push(action.payload)
      return {
        arrayBebidas: bebidas
      }
    case ActionTypes.DELETE_BEERS:
      bebidas.map((item: Beers, index: number) => {
        if(item.id === action.payload.id){
          bebidas.splice(index, 1)
        }
      })
      return {
        arrayBebidas: bebidas
      }
    case ActionTypes.ADD_BEERS:
      bebidas.map((item: Beers) => {
        if(item.id === action.payload.id){
          item.quantidade++
          item.price = item.precoBase * item.quantidade
        }
      })
      return {
        arrayBebidas: bebidas
      }
    case ActionTypes.REMOVE_BEERS:
      bebidas.map((item: Beers) => {
        if(item.id === action.payload.id){
          item.quantidade--
          item.price = item.precoBase * item.quantidade
        }
      })
      return {
        arrayBebidas: bebidas
      }
    default:
      return state
  }
}

export default reducerBeer