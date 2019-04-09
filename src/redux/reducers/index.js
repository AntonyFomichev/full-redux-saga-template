import { fetchFilters } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  data: [],
  success: false,
  pending: false,
  error: false,
};

const handlers = {
  [fetchFilters.FETCH_FILTERS_START]: (state) => ({ 
        ...state,
        data: [],
        pending: true,
  }),
  [fetchFilters.FETCH_FILTERS_SUCCESS]: (state, payload) => ({
        ...state,
        data: payload,
        success: true,
        pending: false
  }),
  [fetchFilters.FETCH_FILTERS_FAILED]: (state) => ({
        ...state,
        pending: false,
        success: false,
        error: true
  }),
}

function Reducer(state = initialState, { type, payload }) {
  const handler = handlers[type]
  if(handler) {
      return handler(state, payload)
  }
  return state
}

export default combineReducers({
  filters: Reducer,
})
