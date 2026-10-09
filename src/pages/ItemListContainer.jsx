import { useEffect, useState } from 'react';
import Item from '../components/Item';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch('/data/productos.json')
        .then((res) => res.json())
        .then((data) => {
        setProducts(data);
        setLoading(false);
        })
        .catch((err) => {
        console.error('Error cargando productos:', err);
        setLoading(false);
        });
    }, []);

    if (loading) return <p>Cargando catálogo...</p>;

    return (
    <div>
        <h1>Catálogo de Productos</h1>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {products.map((prod) => (
            <Item key={prod.id} product={prod} />
        ))}
        </div>
    </div>
    );
};

export default ItemListContainer;