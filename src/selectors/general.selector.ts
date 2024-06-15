export const siteMenuOpenSelector = (state) => state.general.isSiteMenuOpen;

export const cartSelector = (state) => state.general.cart;
export const cartAmountSelector = (state) => state.general.cart.length;
export const subtotalSelector = (state) =>
  state.general.cart.reduce((acc, curr) => acc + curr.price, 0);
