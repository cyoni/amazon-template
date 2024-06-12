import { ADD_TO_CART, OPEN_CLOSE_SITE_MENU } from "@/actions/general.actions"

const initialState = {
  isSiteMenuOpen: false,
  cart: [],
}

const GeneralReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case OPEN_CLOSE_SITE_MENU:
      return { ...state, isSiteMenuOpen: action.payload }
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] }
    default:
      return state
  }
}

export default GeneralReducer
