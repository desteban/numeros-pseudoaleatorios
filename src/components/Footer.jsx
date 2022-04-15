import React from 'react';
import { Enlace } from '../components';

export default function Footer() {
	return (
		<footer>
			<div className="integrantes">
				<strong>Integrantes: </strong>
				<ul>
					<li>Sergio Andrés Blanco García</li>
					<li>Brayan Nicolas Molina Romero</li>
					<li>David Esteban Cubillos Giraldo</li>
					<li>Julián Camilo Gómez Caicedo </li>
					<li>Sebastian Ricardo Piñeros Maldonado</li>
				</ul>
			</div>
			<div>
				<Enlace href="https://github.com/desteban/numeros-pseudoaleatorios" blanck={true}>
					✍️ codigo
				</Enlace>
			</div>
		</footer>
	);
}
