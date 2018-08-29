export const UPDATE_SIDEBAR = "sidebar:updateSidebar";

export function updateSidebar(val) {
  return {
    type: UPDATE_SIDEBAR,
    payload: {
      link: val
    }
  }
}
