import React from "react";
import "./Productcard.css";
import formatCurrency from "format-currency";
import Rating from "./Rating";
import { useContext } from "react";

import CartContext from "../context/cart/CartContext";


const Productcard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

  let opts = { format: "%s%v", symbol: "€" };
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={product.image} alt="" />
        <h4>{product.name}</h4>
        <div className="productCard__price">
          <h5>{formatCurrency(`${product.price}`, opts)}</h5>
        </div>
        <div className="ProductCard__Rateing">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
        <button
          className="ProductCard__button"
          onClick={() => addToCart(product)}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default Productcard;
