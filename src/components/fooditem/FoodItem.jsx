import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, image, description, name, price }) => {
  const { cartItems, setCartItems, removeFromCart, addToCart } =
    useContext(StoreContext);

  return (
    <>
      <div className="food-item">
        <div className="food-item-img-container">
          <img className="food-item-image" src={image} alt="" />
          {!cartItems[id] ? (
            <img
              className="add"
              src={assets.add_icon_white}
              onClick={() => addToCart(id)}
            />
          ) : (
            <div className="food-item-counter">
              <img
                src={assets.remove_icon_red}
                alt=""
                onClick={() => removeFromCart(id)}
              />
              <p>{cartItems[id]}</p>
              <img
                src={assets.add_icon_green}
                alt=""
                onClick={() => addToCart(id)}
              />
            </div>
          )}
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
