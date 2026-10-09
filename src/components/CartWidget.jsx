import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
    const { getTotalQuantity } = useCart();
    const total = getTotalQuantity();

    return (
    <Link to="/carrito" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '5px' }}>
        🛒 <span>{total}</span>
    </Link>
    );
};

export default CartWidget;