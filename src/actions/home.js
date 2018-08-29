export const ROUTE_CHANGE = "home:routeChange";

export function routeChange(val) {
  return {
    type: ROUTE_CHANGE,
    payload: {
      route: val
    }
  }
}
