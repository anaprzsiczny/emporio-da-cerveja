import { BebidasI } from "../../../types/typeshome";

export enum ActionTypes {
  GET_BEERS = 'GET_BEERS',
  POST_BEERS = 'POST_BEERS',
  DELETE_BEERS = 'DELETE_BEERS',
  ADD_BEERS = 'ADD_BEERS',
  REMOVE_BEERS = 'REMOVE_BEERS'
}

export interface Beers extends BebidasI {
  quantidade: number
}