const TOGGLE_MENU = "TOGGLE_MENU";
const CLOSE_MENU = "CLOSE_MENU";
const ROUTE_LOAD = "ROUTE_LOAD";

const initialState = {
  isMenuOpen: false
};

export function reducer(state = initialState, action) {
  return state;
}

// TODO toggle and close menu via redux or component?
export function toggleMenu() {}

export function closeMenu() {}

export function onRouteLoad() {}

