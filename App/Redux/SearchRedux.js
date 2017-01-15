// @flow

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { filter } from 'ramda'
import { startsWith } from 'ramdasauce'

const LIST_DATA = [
  {
    'name':'Gypsy Tears',
    'brewery':'Parallel 49',
    'rating':'4'
  },
  {
    'name':'Sun God Wheat Ale',
    'brewery':'R&B Brewing',
    'rating':'4.5'
  },
  {
    'name':'Passive Aggressive',
    'brewery':'Brassneck',
    'rating':'4'
  },
  {
    'name':'Thunderbird Lager',
    'brewery':'Molson Brewing',
    'rating':'2'
  }
  ]


/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  search: ['searchTerm'],
  cancelSearch: null
})

export const TemperatureTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  searchTerm: '',
  searching: false,
  results: LIST_DATA
})

/* ------------- Reducers ------------- */

export const performSearch = (state: Object, { searchTerm }: Object) => {
  // const results = filter(startsWith(searchTerm), LIST_DATA)
  console.log('performing serach')
  var results = []
  for (var beer in LIST_DATA) {
    for (var key in beer) {
      if (beer[key].startsWith(searchTerm)){
        results.push(beer)
      }
    }
  }
  console.log('results are'  + JSON.stringify(results))
  return state.merge({ searching: true, searchTerm, results })
}

export const cancelSearch = (state: Object) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH]: performSearch,
  [Types.CANCEL_SEARCH]: cancelSearch
})
