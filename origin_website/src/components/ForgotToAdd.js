import React, { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { CartContext } from "./CartContext";
import green_chillies from "../images/green_chillies.jpg";
import mint_leaves from "../images/mint_leaves.jpg";
import ooty_carrots from "../images/ooty_carrots.jpg";

// Dummy data for "Forgot to Add?" section
const forgotToAddItems = [
    { id: 1, name: "Ooty Carrot", weight: "1 Kilogram", price: 28, image: ooty_carrots },
    { id: 2, name: "Mint Leaves", weight: "1 Bunch", price: 11, image: mint_leaves },
    { id: 3, name: "Green Chilli", weight: "1 Packet", price: 28, image: green_chillies }
];

const ForgotToAdd = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <>
            <Typography variant="h6" gutterBottom>Forgot to add?</Typography>
            <Grid container spacing={2}>
                {forgotToAddItems.map((item) => (
                    <Grid item xs={2} key={item.id}>
                        <Box textAlign="left">
                            <img src={item.image} alt={item.name} style={{ width: "100%" }} />
                            <Typography variant="body2">{item.name}</Typography>
                            <Typography variant="body2" color="textSecondary">{item.weight}</Typography>
                            <Box display="flex" alignItems="center" justifyContent="space-between" mt={1}>
                                <Typography variant="body2">₹{item.price}</Typography>
                                <Box
                                    onClick={() => addToCart(item)}
                                    display="flex"
                                    alignItems="center"
                                    style={{
                                        backgroundColor: '#FFD700', // Yellow background
                                        color: '#000', // Black text
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Typography variant="body2" style={{ marginRight: '4px' }}>Add</Typography>
                                    <i class="fa-solid fa-plus" />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default ForgotToAdd;
