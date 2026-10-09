import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
    <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <CartWidget />
    </nav>
    );
};

export default Navbar;