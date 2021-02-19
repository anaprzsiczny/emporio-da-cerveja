import { BebidasI } from "../../../types/typeshome";

export enum ActionTypes {
  POST_BEERS = 'POST_BEERS',
  DELETE_BEERS = 'DELETE_BEERS',
  ADD_BEERS = 'ADD_BEERS',
  REMOVE_BEERS = 'REMOVE_BEERS',
  FINISH_ORDER = 'FINISH_ORDER'
}

export interface Beers extends BebidasI {
  quantidade: number,
  precoBase: number
}