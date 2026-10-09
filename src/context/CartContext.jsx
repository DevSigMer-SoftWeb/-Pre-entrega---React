import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);
        if (existingItem) {
        return prevCart.map((item) =>
            item.id === product.id
            ? { ...item, cantidad: item.cantidad + quantity }
            : item
        );
        }
        return [...prevCart, { ...product, cantidad: quantity }];
    });
    };

    const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => setCart([]);

    const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.cantidad, 0);
    };

    const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.precio * item.cantidad, 0);
    };

    return (
    <CartContext.Provider
        value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalQuantity,
        getTotalPrice
        }}
    >
        {children}
    </CartContext.Provider>
    );
};