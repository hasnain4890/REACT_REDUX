import Home from "../components/Home";
import { connect } from "react-redux";

import { AddToCart } from "../Services/Actions/Action";

const mapStateToprops = (state) => ({
  data: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(AddToCart(data)),
});
export default connect(mapDispatchToProps, mapStateToprops)(Home);
