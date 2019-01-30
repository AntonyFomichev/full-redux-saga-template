import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import getFilters from '../../redux/sagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
  const enhancers = applyMiddleware(sagaMiddleware);

  const store = createStore(
    rootReducer,
    fromJS(initialState),
    composeWithDevTools(compose(enhancers)),
  );
  
  store.runSaga = sagaMiddleware.run((getFilters));
  
  return store;
}
