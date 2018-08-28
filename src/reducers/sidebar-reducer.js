import { UPDATE_SIDEBAR } from '../actions/sidebar-actions';


const sidebarReducer = (state, {type, payload}) => {
  switch(type) {
    case UPDATE_SIDEBAR:
      return {link: payload.link};
    default:
      return {link: "home"};
  }
}

export default sidebarReducer;
