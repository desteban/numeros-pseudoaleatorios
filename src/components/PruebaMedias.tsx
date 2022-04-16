import React from 'react';
import { respuestaPruebaMedias } from '../util';

type props = {
	prueba: respuestaPruebaMedias;
};

export default function PruebaMedias(props: props) {
	return (
		<section style={{ marginTop: '1rem' }}>
			<strong>Pruebas</strong>

			<div className="medias pruebas">
				<div>
					<span className="titulo">Prueba de medias. α=0.05</span>

					<div className="hipotesis">
						<p>
							H<sub>0</sub>: 0.5
							<br />H<sub>1</sub>: 0.5
						</p>
					</div>
					<div>
						<p>
							<span className="bar">r</span> = {props.prueba.promedioR}
						</p>
					</div>
					<div className="limites">
						<p>
							LI<sub className="bar">r</sub> ={props.prueba.LimiteInferior}
							<br />
							LS<sub className="bar">r</sub> ={props.prueba.LimiteSuperior}
						</p>
					</div>

					<p className="aceptar">
						¿Aceptar hipótesis nula?{' '}
						<strong>{props.prueba.valorAceptacion ? 'Si' : 'No'}</strong>
					</p>
				</div>
			</div>
		</section>
	);
}
