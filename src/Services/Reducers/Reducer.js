import { ADD_TO_CART } from "../Constant";
const initialstate = {
  cardData: [],
};
export default function cartItems(state = initialstate, action) {
  switch (action.type) {
    case ADD_TO_CART:
      //   console.log("reducer", action);
      return {
        ...state,
        cardData: action.data,
      };
    default:
      return state;
  }
}
