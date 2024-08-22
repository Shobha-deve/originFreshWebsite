import React from "react";
import { Container, Grid, Typography, Button, Card, CardContent, CardMedia, Box } from "@mui/material";
import { Link } from "react-router-dom";
import vegetable_logo from "../images/vegetable_logo.jpg";
import origin_logo from "../images/origin_logo.png";
import products from "./productsDetailsData";

const HomePage = () => {
    return (
        <Container maxWidth="lg" >
            <Box
                sx={{
                    backgroundColor: "#ffeb3b",
                    p: 5,
                    mt: 3,
                    mb: 5,
                    width: "100%",
                }}
            >
                <Grid container spacing={4} alignItems="center">
                    {/* Left Side: Text */}

                    <Grid item xs={12} md={6}><Box
                        component="img"
                        src={origin_logo}
                        alt="Fresh Vegetables"
                        sx={{
                            width: "100%",
                            borderRadius: 2,
                        }}
                    />
                        <Typography variant="h3" component="h1" gutterBottom>
                            Where Fresh is a Lifestyle
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ mt: 2 }}
                        >
                            Shop Now
                        </Button>
                    </Grid>

                    {/* Right Side: Image */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={vegetable_logo}
                            alt="Fresh Vegetables"
                            sx={{
                                width: "100%",
                                borderRadius: 2,
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* Popular Products Section */}
            <Typography variant="h4" gutterBottom>
                Your Freshest Finds
            </Typography>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt={product.name}
                                height="140"
                                image={product.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="h10" color="text.secondary" component="div">
                                    {product.description}
                                </Typography>
                                <Typography variant="h8" color="text.secondary">
                                    {product.weight}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                    {product.price}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    component={Link}
                                    to={`/products/${product.id}`}
                                    sx={{ mt: 2 }}
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Commitment Section */}
            <Box
                sx={{
                    backgroundColor: "#f5f5f5",
                    p: 5,
                    textAlign: "center",
                    mt: 8,
                    mb: 8,
                }}
            >
                <Typography variant="h4" gutterBottom>
                    It's not just a commitment, it's a responsibility
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2 }}
                >
                    Learn More
                </Button>
            </Box>

            {/* Customer Stories Section */}
            <Typography variant="h4" gutterBottom>
                Customer Stories
            </Typography>
            <Grid container spacing={4}>
                {/* Add customer stories here */}
            </Grid>

            {/* App Download Section */}
            <Box
                sx={{
                    backgroundColor: "#ffeb3b",
                    p: 5,
                    textAlign: "center",
                    mt: 8,
                    mb: 8,
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Download the App and Get FLAT 20% Off on 1st Order
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2 }}
                >
                    Download Now
                </Button>
            </Box>
        </Container>
    );
};

export default HomePage;
