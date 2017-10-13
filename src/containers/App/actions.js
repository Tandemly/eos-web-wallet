const TOGGLE_MENU = 'TOGGLE_MENU';
const CLOSE_MENU = 'CLOSE_MENU';
const ROUTE_LOAD = 'ROUTE_LOAD';

export function toggleMenu() {
  return {
    type: TOGGLE_MENU,
  };
}

export function closeMenu() {
  return {
    type: CLOSE_MENU,
  };
}

export function routeLoad() {
  return {
    type: ROUTE_LOAD,
  };
}