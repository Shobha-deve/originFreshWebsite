import React, { useContext } from "react";
import { AppBar, Toolbar, IconButton, InputBase, Box, Button, Menu, MenuItem } from "@mui/material";
import { Search as SearchIcon, AccountCircle, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import origin_logo from "../images/origin_logo.png";
import { CartContext } from "../components/CartContext";

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { toggleCartDrawer } = useContext(CartContext);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "#fff", color: "#000" }}>
            <Toolbar>
                {/* Logo */}
                <Box component={Link} to="/" sx={{ flexGrow: 1 }}>
                    <img src={origin_logo} alt="Origin" style={{ height: "40px" }} />
                </Box>

                {/* Search Bar */}
                <Box sx={{ flexGrow: 3, display: 'flex', alignItems: 'center' }}>
                    <InputBase
                        placeholder="Search products…"
                        sx={{ ml: 1, flex: 1, backgroundColor: "#f0f0f0", borderRadius: "4px", padding: "6px 10px" }}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Box>

                {/* Navigation Links */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button color="inherit" onClick={handleMenu}>
                        Shop all
                    </Button>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Category 1</MenuItem>
                        <MenuItem onClick={handleClose}>Category 2</MenuItem>
                    </Menu>

                    <Button color="inherit" onClick={handleMenu}>
                        About us
                    </Button>

                    <Button color="inherit" component={Link} to="/stores">
                        Stores
                    </Button>
                </Box>

                {/* User Icons */}
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <IconButton color="inherit" onClick={toggleCartDrawer(true)}>
                        <ShoppingCart />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
