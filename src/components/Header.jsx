import Navbar from './Navbar';

const Header = () => {
    return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <h2>Mi Tienda Tech</h2>
        <Navbar />
    </header>
    );
};

export default Header;