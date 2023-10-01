import { Box, IconButton, Badge, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const cartItems = useSelector((state) => state.cart.items);

  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <AiOutlineSearch />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <MdDarkMode />
          ) : (
            <MdOutlineDarkMode />
          )}
        </IconButton>
        <IconButton>
          <MdNotifications />
        </IconButton>
        <IconButton>
          <Badge badgeContent={totalItemsInCart} color="secondary">
            <AiOutlineShoppingCart />
          </Badge>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
