export const OPEN_CLOSE_SITE_MENU = "OPEN_CLOSE_SITE_MENU";
export const ADD_TO_CART = "ADD_TO_CART";

export const openCloseSiteMenu = (isOpen: boolean) => {
  return { type: OPEN_CLOSE_SITE_MENU, payload: isOpen };
};

export const addToCartAction = (product) => {
  return {type: ADD_TO_CART, payload: product}
}
