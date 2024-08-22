import React, { createContext, useState } from "react";

// Create the CartContext
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    // Toggle the cart drawer (open/close)
    const toggleCartDrawer = (open) => () => {
        setIsCartOpen(open);
    };

    // Function to add items to the cart
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const itemIndex = prevItems.findIndex(item => item.id === product.id);
            if (itemIndex !== -1) {
                const updatedItems = [...prevItems];
                updatedItems[itemIndex].quantity += 1;
                return updatedItems;
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Function to remove items from the cart
    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    // Function to decrease the quantity of items in the cart
    const decreaseQuantity = (productId) => {
        setCartItems((prevItems) => {
            const itemIndex = prevItems.findIndex(item => item.id === productId);
            if (itemIndex !== -1) {
                const updatedItems = [...prevItems];
                if (updatedItems[itemIndex].quantity > 1) {
                    updatedItems[itemIndex].quantity -= 1;
                    return updatedItems;
                } else {
                    // If the quantity is 1, remove the item from the cart
                    return prevItems.filter(item => item.id !== productId);
                }
            }
            return prevItems;
        });
    };

    return (
        <CartContext.Provider value={{
            isCartOpen,
            toggleCartDrawer,
            cartItems,
            addToCart,
            removeFromCart,
            decreaseQuantity
        }}>
            {children}
        </CartContext.Provider>
    );
};
