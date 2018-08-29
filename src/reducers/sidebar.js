import { UPDATE_SIDEBAR } from '../actions/sidebar';


const sidebarReducer = (state, {type, payload}) => {
  switch(type) {
    case UPDATE_SIDEBAR:
      return {link: payload.link};
    default:
      return {link: "home"};
  }
}


export const sidebarSelector = (state) => {
  return state + '_selector';
}
export default sidebarReducer;
