import { useEffect, useState } from 'react';
import { useParams } from 'react';
import { useCart } from '../context/CartContext';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
    fetch('/data/productos.json')
        .then((res) => res.json())
        .then((data) => {
        const found = data.find((item) => item.id === id);
        setProduct(found);
        setLoading(false);
        });
    }, [id]);

    if (loading) return <p>Cargando producto...</p>;
    if (!product) return <p>Producto no encontrado.</p>;

    return (
    <div style={{ maxWidth: '500px', border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
        <img src={product.imagen} alt={product.nombre} style={{ width: '100%' }} />
        <h2>{product.nombre}</h2>
        <p>{product.descripcion}</p>
        <h3>${product.precio.toLocaleString()}</h3>
        <button onClick={() => addToCart(product, 1)}>Agregar al Carrito</button>
    </div>
    );
};

export default ItemDetailContainer;