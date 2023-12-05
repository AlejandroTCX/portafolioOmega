import Navbar from '../../Components/Navbar';

export default function Contact() {
	return (
		<>
			<Navbar />
			<div
				className='page-content'
				style={{
					paddingTop: '60px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					minHeight: '100vh',
				}}>
				<div className='container-circle'>
					<img
						src='https://glbes.dokkaninfo.com/assets/global/es/character/card/1011500/card_1011500_character.png'
						className='profile-circle'
						alt='Perfil'></img>
				</div>
				<div className='cotenedor'>
					<h3>Hola soy Alejandro Tolentino Cardenas aka OmegaShenron</h3>
				</div>
				<div className='contendor-redes'>
					<h4>Sigueme en mis redes sociales</h4>
					<p>github</p>
					<img
						src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
						className='logo'
						alt='Logo GitHub'></img>
					<p>Facebook</p>
					<img
						src='https://www.unipile.com/wp-content/uploads/2022/06/logo-facebook-noir.png'
						className='logo'
						alt='Logo Facebook'></img>
				</div>
			</div>
		</>
	);
}
