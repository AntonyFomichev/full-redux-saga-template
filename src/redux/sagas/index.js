import {take, put, call} from 'redux-saga/effects';
import {fetchFilters, fetchFiltersSuccess, fetchFiltersFailed} from '../actions';
import axios from 'axios';

export default function* getFilters(){
  while(true) {
    try {
    yield take(fetchFilters.FETCH_FILTERS_START);
    const filters = yield call(getFilter);
    yield put(fetchFiltersSuccess(filters));
  } catch (e) {
    yield put(fetchFiltersFailed(e));
  }
  }
}

function getFilter() {
  return axios.get('http://localhost:3001/filters').then(res => res.data);
}