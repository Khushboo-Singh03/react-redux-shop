import { useSelector, useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../features/userApi/cartSlice";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Grid,
  Container,
} from "@mui/material";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";

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
    <Container maxWidth="lg">
      <Typography variant="h3" component="h2" align="start" gutterBottom>
        Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h5" component="p" align="center">
          Your cart is empty.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {cartItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ backgroundColor: "#1F2A40" }}>
                <CardMedia
                  component="img"
                  alt={item.title}
                  height="240"
                  image={item.image}
                />
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom noWrap>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    ${item.price.toFixed(2)}
                  </Typography>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDecrementQuantity(item)}
                    >
                      <BiMinus />
                    </IconButton>
                    <Typography variant="h6" component="span">
                      {item.quantity}
                    </Typography>
                    <IconButton
                      variant="contained"
                      color="secondary"
                      onClick={() => handleIncrementQuantity(item)}
                    >
                      <BiPlus />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="h4" component="p" align="right">
              Total Price: ${totalPrice.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Cart;
