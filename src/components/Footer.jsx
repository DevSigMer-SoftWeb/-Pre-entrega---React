const Footer = () => {
    const team = [
    { name: 'Ana Gómez', role: 'Frontend Dev', email: 'ana@empresa.com' },
    { name: 'Carlos Ruiz', role: 'Backend Dev', email: 'carlos@empresa.com' },
    { name: 'María López', role: 'UI/UX Designer', email: 'maria@empresa.com' }
    ];

    return (
    <footer style={{ borderTop: '1px solid #ccc', padding: '2rem 1rem', marginTop: '2rem' }}>
        <div>
        <h3>Sobre Mi Tienda Tech</h3>
        <p>Empresa líder en distribución de tecnología y periféricos de alta gama.</p>
        </div>

        <h4>Nuestro Equipo</h4>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        {team.map((member, idx) => (
            <div key={idx} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', minWidth: '180px' }}>
            <strong>{member.name}</strong>
            <p style={{ margin: '0.2rem 0' }}>{member.role}</p>
            <small>{member.email}</small>
            </div>
        ))}
        </div>
    </footer>
    );
};

export default Footer;