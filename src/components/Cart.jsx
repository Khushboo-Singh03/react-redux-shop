import { useSelector, useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../features/userApi/cartSlice";
import Navbar from "./Navbar";
import "../assets/navbar.css";
import "../assets/product.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleIncrementQuantity = (product) => {
    dispatch(incrementQuantity(product));
  };

  const handleDecrementQuantity = (product) => {
    dispatch(decrementQuantity(product));
  };

  return (
    <>
      <Navbar />
      <h2>Cart</h2>
      <div className="container">
      <ul>
  {cartItems.map((item) => {
    console.log(item); // Log the item to the console for debugging
    return (
      <li key={item.id}>
        {item.image ? (
          <img src={item.image} alt={item.title} />
        ) : (
          <p>No image available</p>
        )}
        <p>{item.title}</p> <p>${item.price} </p>
        <button onClick={() => handleIncrementQuantity(item)}>+</button>
        {item.quantity}
        <button onClick={() => handleDecrementQuantity(item)}>-</button>
      </li>
    );
  })}
</ul>

        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </>
  );
};

export default Cart;
