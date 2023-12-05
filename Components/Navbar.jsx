import LogoOs from '../src/images/LogoOs.png';
export default function Navbar() {
	return (
		<div className='navbar'>
			<img src={LogoOs} alt='logoOmega' className='logo'></img>
			<a href='/'>Inicio</a>
			<a href='#'>Acerca de</a>
			<a href='#'>Servicios</a>
			<a href='contact'>Contacto</a>
			<button>Botón</button>
		</div>
	);
}
