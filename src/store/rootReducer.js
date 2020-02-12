import {combineReducers} from 'redux';

import loading from './reducers/loading';

const appReducer = combineReducers({
  loading,
});

export default (state, action) => appReducer(state, action);
