import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import sidebar, * as fromSidebar from './sidebar';
import home, * as fromHome from './home';

const reducer = combineReducers({
  sidebar,
  home
})

export const homeSelector = (state) => fromHome.homeSelector(state);
export const sidebarSelector = (state) => fromSidebar.sidebarSelector(state);

export default reducer;
