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
				<span className="titulo">Prueba de medias. α=0.05</span>

				<div>
					<p>
						LI<sub>i</sub> = 0.5 - Z<sub>α/2</sub>[1/√(12𝑛)]
					</p>
					<p>
						LS<sub>i</sub> = 0.5 + Z<sub>α/2</sub>[1/√(12𝑛)]
					</p>
				</div>
				<div>
					<p>
						Z<sub>α/2</sub> = {props.prueba.Zalphamedios}
					</p>
					<p>
						1/√(12𝑛) = 1/({props.prueba.raiz}) = {props.prueba.fraccion}
					</p>
				</div>

				<div>
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
