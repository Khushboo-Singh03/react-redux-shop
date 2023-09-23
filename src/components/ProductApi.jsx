import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../features/userApi/apiSlice"; // Import the addToCart action from your cartSlice
import "../assets/product.css";
import StarRating from "./StarRating";
import Navbar from "./Navbar";
import { addToCart } from "../features/userApi/cartSlice";

const ProductApi = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, errorMessage } = useSelector((state) => state.api);

  useEffect(() => {
    // You can directly use productId if needed, or you can remove it
    // if it's not used anywhere in your component.
    const productId = ""; // Initialize productId here if needed.

    dispatch(fetchProductData(productId));
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Navbar />
      <h2>Product Profile</h2>
      <div className="container">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {errorMessage}</p>}
        {data && data.length > 0 ? (
          data.map((product) => (
            <div key={product.id} className="inner-container">
              <img src={product.image} alt={product.title} />
              <br />
              <span className="rating-span">
                <StarRating rating={product.rating.rate} count={product.rating.count} />
              </span>
              &nbsp; &nbsp;
              <div className="inner-data">
                <h5>{product.title}</h5>
                <p>{product.category}</p>
                <p>&#8377;{product.price}</p>
                <button onClick={() => handleAddToCart(product)}>
                  Add to cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No product data available.</p>
        )}
      </div>
    </>
  );
};

export default ProductApi;
