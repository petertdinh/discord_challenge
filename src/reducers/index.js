import { combineReducers } from 'redux';
import tabReducer from './tab_reducer';
import inputReducer from './input_reducer';

const rootReducer = combineReducers({
  tabs: tabReducer,
  input: inputReducer,
});

export default rootReducer;
