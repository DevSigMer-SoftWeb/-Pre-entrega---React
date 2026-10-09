import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '220px', textAlign: 'center' }}>
        <img src={product.imagen} alt={product.nombre} style={{ width: '100%', borderRadius: '4px' }} />
        <h3>{product.nombre}</h3>
        <p>${product.precio.toLocaleString()}</p>
        <Link to={`/producto/${product.id}`}>Ver detalle</Link>
    </div>
    );
};

export default Item;