import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../features/userApi/apiSlice"; 
import Navbar from "./Navbar";
import { addToCart } from "../features/userApi/cartSlice";

const ProductApi = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, errorMessage } = useSelector((state) => state.api);

  useEffect(() => {
    const productId = ""; // Initialize productId here if needed.
    dispatch(fetchProductData(productId));
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Navbar />
      <h2 className="text-3xl font-semibold">Product Profile</h2>
      <div className="flex flex-wrap -mx-2">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {errorMessage}</p>}
        {data && data.length > 0 ? (
          data.map((product) => (
            <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
              <div className="bg-white shadow-lg p-4 rounded-md h-full flex flex-col justify-between">
                <div className="mb-2">
                  <img src={product.image} alt={product.title} className="object-cover h-48 w-full" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-gray-700">{product.title}</h5>
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">
                      {product.rating.rate} (Count: {product.rating.count})
                    </span>
                    <p className="text-xl font-semibold text-gray-700">&#8377;{product.price}</p>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    Add to cart
                  </button>
                </div>
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
