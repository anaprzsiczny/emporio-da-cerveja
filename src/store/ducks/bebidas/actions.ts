import { action } from 'typesafe-actions'
import { ActionTypes, Beers } from './types'

export const postBeer = (payload: Beers) => action(ActionTypes.POST_BEERS, payload)

export const deleteBeer = (payload: Beers) => action(ActionTypes.DELETE_BEERS, payload)

export const addBeer = (payload: Beers) => action(ActionTypes.ADD_BEERS, payload)

export const removeBeer = (payload: Beers) => action(ActionTypes.REMOVE_BEERS, payload)