import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <div>
        <h1>Bienvenido a Mi Tienda Tech</h1>
        <p>Encuentra los mejores productos de tecnología al mejor precio.</p>
        <Link to="/productos">Ir al catálogo</Link>
    </div>
    );
};

export default Home;