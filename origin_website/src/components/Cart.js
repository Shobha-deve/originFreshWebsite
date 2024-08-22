import React, { useContext } from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Typography,
    Divider,
    Box,
    Button,
    Grid
} from "@mui/material";
import { CartContext } from "./CartContext";
import { Close as CloseIcon, Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import green_chillies from "../images/green_chillies.jpg";
import mint_leaves from "../images/mint_leaves.jpg";
import ooty_carrots from "../images/ooty_carrots.jpg";
import ForgotToAdd from "./ForgotToAdd";

// Dummy data for "Forgot to Add?" section
const forgotToAddItems = [
    { id: 1, name: "Ooty Carrot", weight: "1 Kilogram", price: 28, image: ooty_carrots },
    { id: 2, name: "Mint Leaves", weight: "1 Bunch", price: 11, image: mint_leaves },
    { id: 3, name: "Green Chilli", weight: "1 Packet", price: 28, image: green_chillies }
];

// Dummy data for Delivery Instructions
const deliveryInstructions = [
    { id: 1, text: "Leave at guard/Gate", icon: "fa-solid fa-traffic-light" },
    { id: 2, text: "Leave at the door", icon: "fa-regular fa-door-open" },
    { id: 3, text: "Don't ring doorbell", icon: "fa-regular fa-bell-slash" },
    { id: 4, text: "Any Call", icon: "fa-solid fa-phone-slash" }
];

const Cart = () => {
    const { isCartOpen, toggleCartDrawer, cartItems, addToCart, removeFromCart, decreaseQuantity } = useContext(CartContext);
    const itemTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const savingsThreshold = 25;
    const couponThreshold = 25 + 120; 
    const savings = itemTotal >= savingsThreshold ? 25 : 0;
    const coupon = itemTotal > couponThreshold ? 120 : 0;

    const finalAmount = itemTotal - savings - coupon;
    return (
        <Drawer anchor="right" open={isCartOpen} onClose={toggleCartDrawer(false)}>
            <Box p={1}>
                <Typography variant="h6" gutterBottom>Your Cart</Typography>

                <List>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <ListItem key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <img src={item.image} alt={item.name} style={{ width: 50, marginRight: 16 }} />
                                <div style={{ flex: 1 }}>
                                    <ListItemText
                                        primary={<Typography variant="body1">{item.name}</Typography>}
                                        secondary={
                                            <Typography variant="body2" color="textSecondary">
                                                {item.weight} - ₹{item.price}
                                            </Typography>
                                        }
                                    />
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton
                                            onClick={() => decreaseQuantity(item.id)}
                                            size="small"
                                            aria-label="decrease quantity"
                                        >
                                            <RemoveIcon fontSize="small" />
                                        </IconButton>
                                        <Typography variant="body2" style={{ margin: '0 10px' }}>
                                            {item.quantity}
                                        </Typography>
                                        <IconButton
                                            onClick={() => addToCart(item)}
                                            size="small"
                                            aria-label="increase quantity"
                                        >
                                            <AddIcon fontSize="small" />
                                        </IconButton>
                                    </div>
                                </div>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)}>
                                        <CloseIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))
                    ) : (
                        <ListItem>
                            <ListItemText primary="Your cart is empty" />
                        </ListItem>
                    )}
                </List>

                <Divider sx={{ my: 2 }} />

                {/* <Typography variant="h6" gutterBottom>Forgot to add?</Typography>
                <Grid container spacing={2}>
                    {forgotToAddItems.map((item) => (
                        <Grid item xs={2} key={item.id}>
                            <Box textAlign="center">
                                <img src={item.image} alt={item.name} style={{ width: "100%" }} />
                                <Typography variant="body2">{item.name}</Typography>
                                <Typography variant="body2" color="textSecondary">{item.weight}</Typography>
                                <Typography variant="body2">₹{item.price}</Typography>
                                <Button variant="outlined" size="small" onClick={() => addToCart(item)}>
                                    Add
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid> */}
                <ForgotToAdd/>
                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>Delivery Instructions</Typography>
                <Grid container spacing={2}>
                    {deliveryInstructions.map((instruction) => (
                        <Grid item xs={2} key={instruction.id}>
                            <Box textAlign="center">
                                <i className={instruction.icon}></i>
                                <Typography variant="body2">{instruction.text}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Divider sx={{ my: 2 }} />

                {/* Save with Coupons Section */}
                <Typography variant="h6" gutterBottom>Save with Coupons</Typography>
                <Box textAlign="center">
                    <i className="fa-solid fa-ticket-simple"></i>
                    <Typography variant="body2">Add ₹120 more to save ₹250 on this order</Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Bill Details Section */}
                <Typography variant="h6" gutterBottom>Bill Details</Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Item total" />
                        <Typography variant="body2">₹{itemTotal}</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Savings" />
                        <Typography variant="body2" color="secondary">-₹{savings}</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Coupon used" />
                        <Typography variant="body2" color="secondary">-₹{coupon}</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="PAID ONLINE" />
                        <Typography variant="body2">₹{finalAmount}</Typography>
                    </ListItem>
                </List>

                <Divider sx={{ my: 2 }} />

                {/* Cancellation Policy Section */}
                <Typography variant="body2" color="textSecondary" style={{ wordWrap: "break-word", lineHeight: 1.5 }}>
                    Orders cannot be cancelled and are non-refundable once packed for delivery.
                    <br />
                    Review your order before making a payment to avoid cancellation.
                </Typography>

            </Box>
        </Drawer>
    );
};

export default Cart;
