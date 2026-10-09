import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();

    if (cart.length === 0) {
    return (
        <div>
        <h2>Tu carrito está vacío 🛒</h2>
        <Link to="/productos">Volver al catálogo</Link>
        </div>
    );
    }

    return (
    <div>
        <h2>Carrito de Compras</h2>
        <ul>
        {cart.map((item) => (
            <li key={item.id} style={{ marginBottom: '1rem' }}>
            <strong>{item.nombre}</strong> - Cantidad: {item.cantidad} - Subtotal: ${item.precio * item.cantidad}
            <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '1rem' }}>Eliminar</button>
            </li>
        ))}
        </ul>
        <h3>Total: ${getTotalPrice().toLocaleString()}</h3>
        <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
    );
};

export default Cart;