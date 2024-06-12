import { SET_USER } from "@/actions/user.actions";

const initialState = {
  user: null,
};

const UserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      console.log("ACTION", action)
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default UserReducer;
