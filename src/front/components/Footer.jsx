import React from 'react';
import {
	Facebook,
	Twitter,
	Instagram,
	Youtube,
	Mail,
	Phone,
	MapPin,
	CreditCard,
	ShoppingBag,
} from 'lucide-react';

const Footer = () => {
	return (
		<footer style={{ backgroundColor: '#2e2e2e', color: '#f1f1f1', fontWeight: 'bold' }}>
			<div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>

					{/* Logo y redes */}
					<div style={{ flex: '1 1 200px' }}>
						<div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
							<ShoppingBag size={32} color="white" style={{ marginRight: '0.5rem' }} />
							<h3 style={{ fontSize: '1.5rem', color: 'white' }}>SNEAKPEAK</h3>
						</div>
						<p style={{ fontWeight: 'normal', fontSize: '0.9rem' }}>
							Tu destino para zapatillas premium. Lo último en tendencias, lanzamientos exclusivos y clásicos.
						</p>
						<div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
							{[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
								<a key={i} href="#" style={{ color: '#ccc' }}>
									<Icon size={20} />
								</a>
							))}
						</div>
					</div>

					{/* Tienda */}
					<div style={{ flex: '1 1 150px' }}>
						<h4 style={{ marginBottom: '1rem', color: 'white' }}>Tienda</h4>
						<ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
							{['Novedades', 'Más vendidos', 'Hombre', 'Mujer', 'Niños', 'Ofertas'].map((item, idx) => (
								<li key={idx} style={{ marginBottom: '0.5rem' }}>
									<a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>{item}</a>
								</li>
							))}
						</ul>
					</div>

					{/* Información */}
					<div style={{ flex: '1 1 150px' }}>
						<h4 style={{ marginBottom: '1rem', color: 'white' }}>Información</h4>
						<ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
							{['Sobre nosotros', 'Envíos y devoluciones', 'Privacidad', 'Términos', 'Preguntas frecuentes'].map((item, idx) => (
								<li key={idx} style={{ marginBottom: '0.5rem' }}>
									<a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>{item}</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contacto y newsletter */}
					<div style={{ flex: '1 1 250px' }}>
						<h4 style={{ marginBottom: '1rem', color: 'white' }}>Contacto</h4>
						<div style={{ fontWeight: 'normal', fontSize: '0.9rem' }}>
							<div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
								<Phone size={18} color="#ccc" style={{ marginRight: '0.5rem' }} />
								<span>+34 694 863 935</span>
							</div>
							<div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
								<Mail size={18} color="#ccc" style={{ marginRight: '0.5rem' }} />
								<span>soporte@sneakpeak.com</span>
							</div>
							<div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
								<MapPin size={18} color="#ccc" style={{ marginRight: '0.5rem' }} />
								<span>123 Calle Sneakers, Ciudad Zapatilla</span>
							</div>
						</div>

						<h4 style={{ marginTop: '2rem', marginBottom: '0.5rem', color: 'white' }}>Newsletter</h4>
						<form style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
							<input
								type="email"
								placeholder="Tu email"
								style={{
									padding: '0.5rem',
									borderRadius: '6px',
									border: '1px solid #555',
									backgroundColor: '#444',
									color: 'white',
								}}
							/>
							<button
								type="submit"
								style={{
									padding: '0.5rem',
									borderRadius: '6px',
									backgroundColor: 'white',
									color: 'black',
									fontWeight: 'bold',
									cursor: 'pointer',
								}}
							>
								Suscribirse
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* Barra inferior */}
			<div style={{ borderTop: '1px solid #444', padding: '1rem 1.5rem', fontSize: '0.8rem', color: '#aaa' }}>
				<div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
					<div>© {new Date().getFullYear()} SneakPeak. Todos los derechos reservados.</div>
					<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
						<span>Métodos de pago:</span>
						{[...Array(4)].map((_, i) => (
							<CreditCard key={i} size={20} color="#aaa" />
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
