import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { searchReducer } from './search';
import { History } from 'history';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    search: searchReducer,
  });
export default createRootReducer;
