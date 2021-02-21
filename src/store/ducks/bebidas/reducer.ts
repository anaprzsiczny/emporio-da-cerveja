import { ActionTypes, Beers } from "./types"


const initialStateBeer = {
  arrayBebidas: [],
  precoTotal: 0,
  quantidadeTotal: 0
}

function reducerBeer(state = initialStateBeer, action: any) {
  const bebidas: any = state.arrayBebidas
  let precoTotal: number = state.precoTotal
  let quantidadeTotal: number = state.quantidadeTotal
  switch(action.type){
    case ActionTypes.POST_BEERS:
      bebidas.push(action.payload)
      precoTotal += action.payload.price
      precoTotal = Number(precoTotal.toFixed(2))
      quantidadeTotal += action.payload.quantidade      
      return {
        arrayBebidas: bebidas,
        precoTotal: precoTotal,
        quantidadeTotal: quantidadeTotal
      }
    case ActionTypes.DELETE_BEERS:
      bebidas.map((item: Beers, index: number) => {
        if(item.id === action.payload.id){
          bebidas.splice(index, 1)
          precoTotal -= item.price
          precoTotal = Number(precoTotal.toFixed(2))
          quantidadeTotal -= item.quantidade
        }
      })
      return {
        arrayBebidas: bebidas,
        precoTotal: precoTotal,
        quantidadeTotal: quantidadeTotal
      }
    case ActionTypes.ADD_BEERS:
      bebidas.map((item: Beers) => {
        if(item.id === action.payload.id){
          item.quantidade++
          item.price = item.precoBase * item.quantidade
          item.price = Number(item.price.toFixed(2))
          precoTotal += item.precoBase
          precoTotal = Number(precoTotal.toFixed(2))
          quantidadeTotal++
        }
      })
      return {
        arrayBebidas: bebidas,
        precoTotal: precoTotal,
        quantidadeTotal: quantidadeTotal
      }
    case ActionTypes.REMOVE_BEERS:
      bebidas.map((item: Beers, index: number) => {
        if(item.id === action.payload.id){
          item.quantidade--
          quantidadeTotal--
          item.price = item.precoBase * item.quantidade
          item.price = Number(item.price.toFixed(2))
          precoTotal -= item.precoBase
          precoTotal = Number(precoTotal.toFixed(2))
          if(item.quantidade == 0){
            bebidas.splice(index, 1)
          }
        }
      })
      return {
        arrayBebidas: bebidas,
        precoTotal: precoTotal,
        quantidadeTotal: quantidadeTotal
      }
    case ActionTypes.FINISH_ORDER:
      return {
        arrayBebidas: [],
        precoTotal: 0,
        quantidadeTotal: 0
      } 
    default:
      return state
  }
}

export default reducerBeer