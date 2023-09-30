import { useSelector, useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../features/userApi/cartSlice";
import Navbar from "./Navbar";

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
      <h2 className="text-3xl font-semibold text-center">Cart</h2>
      <div className="container mx-auto mt-4">
        {cartItems.length === 0 ? ( // Check if the cart is empty
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cartItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className="bg-white p-4 shadow-md rounded-md flex flex-col justify-between"
                >
                  <div>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto mb-2"
                      />
                    ) : (
                      <p className="mb-2">No image available</p>
                    )}
                    <p className="text-lg font-semibold text-gray-700">
                      {item.title}
                    </p>
                    <p className="text-xl font-semibold text-gray-700">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecrementQuantity(item)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none"
                    >
                      -
                    </button>
                    <p className="mx-2 text-xl font-semibold text-gray-700">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() => handleIncrementQuantity(item)}
                      className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 focus:outline-none"
                    >
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {cartItems.length > 0 && ( 
          <p className="text-2xl mt-4">Total Price: ${totalPrice.toFixed(2)}</p>
        )}
      </div>
    </>
  );
};

export default Cart;
