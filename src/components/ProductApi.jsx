import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../features/userApi/apiSlice";
import { addToCart } from "../features/userApi/cartSlice";
import {
  useTheme,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";
import { tokens } from "../theme";

const ProductApi = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const { data, isLoading, isError, errorMessage } = useSelector(
    (state) => state.api
  );

  useEffect(() => {
    const productId = ""; // Initialize productId here if needed.
    dispatch(fetchProductData(productId));
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {errorMessage}</p>}
      </Box>
      <h2 className="text-3xl font-semibold">Product Profile</h2>
      <Grid container spacing={4} mb={5}>
        {data && data.length > 0 ? (
          data.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ backgroundColor: "#1F2A40" }}>
                <CardMedia
                  component="img"
                  alt={product.title}
                  height="240"
                  image={product.image}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom noWrap style={{color:colors.greenAccent[400]}}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph style={{textTransform:"uppercase"}}>
                    {product.category}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h5" gutterBottom style={{color:colors.blueAccent[400]}}>
                      ₹{product.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {product.rating.rate} (Count: {product.rating.count})
                    </Typography>
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body1">No product data available.</Typography>
          </Grid>
        )}
      </Grid>
      {/* <div className="flex flex-wrap -mx-2">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {errorMessage}</p>}
        {data && data.length > 0 ? (
          data.map((product) => (
            <div
              key={product.id}
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
            >
              <div className="bg-white shadow-lg p-4 rounded-md h-full flex flex-col justify-between">
                <div className="mb-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover h-48 w-full"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-gray-700">
                    {product.title}
                  </h5>
                  <p className="text-sm text-gray-500 mb-2">
                    {product.category}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">
                      {product.rating.rate} (Count: {product.rating.count})
                    </span>
                    <p className="text-xl font-semibold text-gray-700">
                      &#8377;{product.price}
                    </p>
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
      </div> */}
    </>
  );
};

export default ProductApi;
