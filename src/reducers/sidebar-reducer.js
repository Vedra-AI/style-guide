import { UPDATE_SIDEBAR } from '../actions/sidebar-actions';

export default function sidebarReducer(state = "", {type, payload}) {
  switch(type) {
    case UPDATE_SIDEBAR:
      return {link: payload.link};
    default:
      return state;
  }
}
