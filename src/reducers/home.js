import { ROUTE_CHANGE } from '../actions/home';


const homeReducer = (state, {type, payload}) => {
  switch(type) {
    case ROUTE_CHANGE:
      return {route: payload.router};
    default:
      return {route: [1,2,3]};
  }
}

export const homeSelector = (state) => {
  let arr = [];
  state.forEach(el => arr.push(el*3));
  return arr;
}

export default homeReducer;
