import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    Button,
    Box,
    CardMedia,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper
} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Add these imports
import AcUnitIcon from '@mui/icons-material/AcUnit'; // Add these imports
import products from "./productsDetailsData";
import { CartContext } from "../components/CartContext"; // Correct the import path
import ForgotToAdd from "../components/ForgotToAdd";
const ProductDetailsPage = () => {
    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));
    const { addToCart, toggleCartDrawer } = useContext(CartContext); // Destructure both addToCart and toggleCartDrawer
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);

    const handleAddToCart = (product) => {
        addToCart(product);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleContinueShopping = () => {
        setOpenModal(false);
        navigate('/'); // Navigate to home page
    };

    if (!product) {
        return (
            <Container>
                <Typography variant="h4">Product not found!</Typography>
            </Container>
        );
    }
  
    return (
        <Container maxWidth="lg" sx={{ mt: 10 }}>
            <Grid container spacing={3}>
                {/* Product Image */}
                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        alt={product.name}
                        image={product.image}
                        sx={{ width: '100%', height: 'auto' }}
                    />

                    {/* Storing Information */}
                    <Box mt={4} p={2}>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Storing information
                        </Typography>
                        <Box display="flex" justifyContent="space-between" mt={2}>
                            <Paper elevation={0} sx={{ display: 'flex', alignItems: 'center', p: 1, borderRadius: 1, backgroundColor: '#f9f5ef' }}>
                                <AccessTimeIcon sx={{ mr: 1, color: '#4caf50' }} />
                                <Box>
                                    <Typography variant="body1" fontWeight="bold">10 Days</Typography>
                                    <Typography variant="body2">Room temp. 19-2</Typography>
                                </Box>
                            </Paper>
                            <Paper elevation={0} sx={{ display: 'flex', alignItems: 'center', p: 1, borderRadius: 1, backgroundColor: '#f9f5ef' }}>
                                <AcUnitIcon sx={{ mr: 1, color: '#4caf50' }} />
                                <Box>
                                    <Typography variant="body1" fontWeight="bold">3 Weeks</Typography>
                                    <Typography variant="body2">Refrigerate 16-19°C</Typography>
                                </Box>
                            </Paper>
                        </Box>
                    </Box>
                </Grid>

                {/* Product Details */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" gutterBottom>
                        {product.weight}
                    </Typography>
                    <Typography variant="h5" color="primary" gutterBottom>
                        ₹{product.price}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ mt: 2 }}
                        onClick={() => handleAddToCart(product)}
                    >
                        Add to Cart
                    </Button>

                    {/* About Section */}
                    <Box mt={4}>
                        <Typography variant="h6" component="h2" gutterBottom>About</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* Forgot to Add? Section
            <Box mt={5}>
                <Typography variant="h6" gutterBottom>Forgot to add?</Typography>
                <Grid container spacing={2}>
                    {forgotToAddItems.map((item) => (
                        <Grid item xs={6} sm={4} md={2} key={item.id}>
                            <Box textAlign="center">
                                <img src={item.image} alt={item.name} style={{ width: "100%" }} />
                                <Typography variant="body2">{item.name}</Typography>
                                <Typography variant="body2" color="textSecondary">{item.weight}</Typography>
                                <Typography variant="body2">₹{item.price}</Typography>
                                <Button variant="outlined" size="small" onClick={() => handleAddToCart(item)}>
                                    Add
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box> */}
            <ForgotToAdd/>
            {/* Modal for Cart */}
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Item Added to Cart"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {product.name} has been added to your cart.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleContinueShopping} color="primary" autoFocus>
                        Continue Shopping
                    </Button>
                    <Button onClick={() => { handleCloseModal(); toggleCartDrawer(true)(); }} color="secondary">
                        View Cart
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default ProductDetailsPage;
