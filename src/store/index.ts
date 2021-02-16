import { createStore } from 'redux'
import reducerBeer from './ducks/bebidas/reducer'

const store = createStore(reducerBeer)

export {store}