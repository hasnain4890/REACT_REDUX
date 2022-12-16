import { ADD_TO_CART } from "../Constant";
export const AddToCart = (data) => {
  return {
    data: data,
    type: ADD_TO_CART,
  };
};
