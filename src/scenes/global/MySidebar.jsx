import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { tokens } from "../../theme";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  FcHome,
  FcShop,
  FcMms,
  FcContacts,
  FcAbout,
  FcFaq,
} from "react-icons/fc";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";


// eslint-disable-next-line react/prop-types
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const menuItemStyle = {
    color: isHovered ? "#fff" : colors.grey[100],
    background: isHovered ? colors.primary[600] : "transparent",
  };

  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      as={to}
      className="no-hover"
      style={menuItemStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MyProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { collapseSidebar, toggleSidebar, broken } = useProSidebar();

  const navLinkStyle = {
    fontSize: "24px", // Adjust the font size as needed
    textDecoration: "none",
    color: colors.grey[100],
  };

  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,

        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar breakPoint="md" backgroundColor={colors.primary[400]}>
        <Menu iconShape="circle">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <HiMenuAlt3 /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              fontSize: "24px",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Shoppee
                </Typography>
                <IconButton
                  style={{
                    fontSize: "24px",
                  }}
                  onClick={
                    broken ? () => toggleSidebar() : () => collapseSidebar()
                  }
                >
                  <MdClose />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box>
            <NavLink to="/" style={navLinkStyle}>
              <Item
                title="Dashboard"
                icon={<FcHome />}
                selected={selected}
                setSelected={setSelected}
                titleFontSize="34px"
              />
            </NavLink>

            <NavLink to="/product" style={navLinkStyle}>
              <Item
                title="Products"
                icon={<FcShop />}
                selected={selected}
                setSelected={setSelected}
              />
            </NavLink>

            <NavLink to="/cart" style={navLinkStyle}>
              <Item
                title="Cart"
                icon={<AiOutlineShoppingCart />}
                selected={selected}
                setSelected={setSelected}
              />
            </NavLink>

            <NavLink to="/about" style={navLinkStyle}>
              <Item
                title="About"
                icon={<FcAbout />}
                selected={selected}
                setSelected={setSelected}
              />
            </NavLink>

            <NavLink to="/contact" style={navLinkStyle}>
              <Item
                title="Contact"
                icon={<FcContacts />}
                selected={selected}
                setSelected={setSelected}
              />
            </NavLink>

            <NavLink to="/blog" style={navLinkStyle}>
              <Item
                title="Blog"
                icon={<FcMms />}
                selected={selected}
                setSelected={setSelected}
              />
            </NavLink>

            <NavLink to="/faq" style={navLinkStyle}>
              <Item
                title="FAQ Page"
                icon={<FcFaq />}
                selected={selected}
                setSelected={setSelected}
              />
            </NavLink>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
