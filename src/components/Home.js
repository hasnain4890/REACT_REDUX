import React from "react";

const Home = (props) => {
  console.log("home", props.cardData);
  return (
    <div>
      <div className="add-to-cart">
        <img src={require("./cartlogo.png")} />
      </div>
      <h1>Hasnain home comp</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={require("./img.png")} />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>price : $ 10000</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({
                price: 1000,
                name: "iphone 33",
              })
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
