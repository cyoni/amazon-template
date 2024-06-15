export const OPEN_CLOSE_SITE_MENU = "OPEN_CLOSE_SITE_MENU";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const openCloseSiteMenu = (isOpen: boolean) => {
  return { type: OPEN_CLOSE_SITE_MENU, payload: isOpen };
};

export const addToCartAction = (product:IProduct) => {
  return {type: ADD_TO_CART, payload: product}
}
export const removeFromCartAction = (id:number) => {
  return {type: REMOVE_FROM_CART, payload: id}
}