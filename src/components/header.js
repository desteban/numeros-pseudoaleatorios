import * as React from 'react';
import { Link } from 'gatsby';
import { Enlace } from './index';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

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
		let width = window.screen.width;

		if (width <= 991) {
			let sidenav = document.getElementById('sidenav');
			let abrirMenu = document.getElementById('abrirMenu');
			let cerrarMenu = document.getElementById('cerrarMenu');
			let nav = document.getElementById('nav');

			sidenav?.classList.toggle('open');
			abrirMenu?.classList.toggle('hide');
			cerrarMenu?.classList.toggle('hide');
			nav?.classList.toggle('active');
		}
	}

	render() {
		return (
			<header>
				<nav id="nav" className="nav">
					<div className="btn-menu" id="btn-menu" onClick={() => this.toogleMenu()}>
						<span id="abrirMenu" className="material-icons click movil-visible">
							menu
						</span>
						<span id="cerrarMenu" className="material-icons hide click movil-visible">
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
						<Enlace
							href="/cuadrados-medios"
							texto="Cuadrados medios"
							className="item espacioHeader"
							onClick={() => this.toogleMenu()}
						></Enlace>
					</div>
				</nav>
			</header>
		);
	}
}
