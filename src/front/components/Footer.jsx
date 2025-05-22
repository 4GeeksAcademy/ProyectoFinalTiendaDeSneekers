import React from 'react';
import {
	Facebook,
	Twitter,
	Instagram,
	Youtube,
	Mail,
	Phone,
	MapPin,
	ShoppingBag,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer style={{ backgroundColor: '#2e2e2e', color: '#f1f1f1', fontWeight: 'bold' }}>
			<div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>

					{/* Logo y redes */}
					<div style={{ flex: '1 1 200px' }}>
						<div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
							<ShoppingBag size={32} color="white" style={{ marginRight: '0.5rem' }} />
							<h3 style={{ fontSize: '1.5rem', color: 'white' }}>SNEAKPEAKS</h3>
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

					{/* Información */}
					<div style={{ flex: '1 1 150px' }}>
						<h4 style={{ marginBottom: '1rem', color: 'white' }}>Información</h4>
						<ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
							<li style={{ marginBottom: '0.5rem' }}>
								<Link to="/sobre-nosotros" style={{ color: '#ccc', textDecoration: 'none' }}>Sobre nosotros</Link>
							</li>
							<li style={{ marginBottom: '0.5rem' }}>
								<Link to="/envios-devoluciones" style={{ color: '#ccc', textDecoration: 'none' }}>Envíos y devoluciones</Link>
							</li>
							<li style={{ marginBottom: '0.5rem' }}>
								<Link to="/privacidad" style={{ color: '#ccc', textDecoration: 'none' }}>Privacidad</Link>
							</li>
							<li style={{ marginBottom: '0.5rem' }}>
								<Link to="/terminos" style={{ color: '#ccc', textDecoration: 'none' }}>Términos</Link>
							</li>
							<li style={{ marginBottom: '0.5rem' }}>
								<Link to="/faq" style={{ color: '#ccc', textDecoration: 'none' }}>Preguntas frecuentes</Link>
							</li>
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
						<img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" style={{ height: '24px' }} />
						<img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" style={{ height: '24px' }} />
						<img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" style={{ height: '24px' }} />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
