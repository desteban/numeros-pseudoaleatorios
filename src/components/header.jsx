import * as React from 'react';
import { Link } from 'gatsby';

export default class Header extends React.Component {
	componentDidMount() {
		this.escojerTema();
	}

	escojerTema() {
		let tema = localStorage.getItem('tema');
		let body = document.querySelector('body');
		let html = document.querySelector('html');
		let estado;

		if (tema) {
			estado = JSON.parse(tema);
		}

		if (!estado) {
			localStorage.setItem('tema', JSON.stringify({ tema: true }));
		}

		if (estado) {
			if (!estado.tema) {
				body?.classList.add('dark');
				html?.classList.add('dark');
			}
		}
	}

	cambiartema() {
		let body = document.querySelector('body');
		let html = document.querySelector('html');

		body?.classList.toggle('dark');
		html?.classList.toggle('dark');
		this.validarTema();
	}

	validarTema() {
		let local = localStorage.getItem('tema');
		let estado;

		if (local) {
			estado = JSON.parse(local);
		}

		if (estado) {
			estado.tema = !estado.tema;
			localStorage.setItem('tema', JSON.stringify(estado));
		}
	}

	toogleMenu() {
		let sidenav = document.getElementById('sidenav');
		let abrirMenu = document.getElementById('abrirMenu');
		let cerrarMenu = document.getElementById('cerrarMenu');
		let nav = document.getElementById('nav');

		sidenav?.classList.toggle('open');
		abrirMenu?.classList.toggle('hide');
		cerrarMenu?.classList.toggle('hide');
		nav?.classList.toggle('active');
	}

	render() {
		return (
			<header>
				<nav id="nav" className="nav">
					<div className="btn-menu" id="btn-menu" onClick={() => this.toogleMenu()}>
						<span id="abrirMenu" className="material-icons click movil-visible">
							menu
						</span>
						<span id="cerrarMenu" className="material-icons click movil-visible hide">
							close
						</span>
					</div>

					<Link to="/" className="logo">
						<div>
							<span className="orange">{'<'}</span>
							desteban
							<span className="orange">{'/>'}</span>
						</div>
					</Link>

					<div className="tema click" id="brightness" onClick={() => this.cambiartema()}>
						<span className="material-icons">brightness_4</span>
					</div>

					<div className="sidenav" id="sidenav">
						<Link to="/cuadrados-medios" className="item" onClick={() => this.toogleMenu()}>
							Cuadrados medios
						</Link>
						<Link to="/productos-medios" className="item" onClick={() => this.toogleMenu()}>
							Productos medios
						</Link>
						<Link
							to="/multiplicador-constante"
							className="item"
							onClick={() => this.toogleMenu()}
						>
							Multiplicador constante
						</Link>
						<Link to="/algoritmo-lineal" className="item" onClick={() => this.toogleMenu()}>
							Algoritmo lineal
						</Link>
						<Link to="/#pruebas" className="item" onClick={() => this.toogleMenu()}>
							Pruebas
						</Link>
					</div>
				</nav>
			</header>
		);
	}
}
