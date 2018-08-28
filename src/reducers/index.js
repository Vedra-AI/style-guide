import { combineReducers } from 'redux';
import sidebarReducer from './sidebar-reducer';

const reducer = combineReducers({
  sidebar: sidebarReducer
})

export default reducer;
