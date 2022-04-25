import React from 'react';
import { respuestaPruebaMedias, respuestaPruebaVarianza } from '../util';

type props = {
	prueba: respuestaPruebaMedias;
	varianza: respuestaPruebaVarianza;
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

			<div className="varianza pruebas">
				<div>
					<div className="hipotesis">
						<p>
							H<sub>0</sub> = 1/12
							<br />H<sub>1</sub> != 1/12
						</p>
					</div>
				</div>

				<div>
					<p>
						V(r) = (Σ<sup>n</sup>
						<sub>i - 1</sub>
						(r<sub>i</sub> - <span className="bar">r</span>)<sup>2</sup>)/(n-1)
					</p>

					<p>
						V(r) = (Σ<sup>n</sup>
						<sub>i - 1</sub>
						(r<sub>i</sub> - {props.varianza.promedio})<sup>2</sup>)/(
						{props.varianza.n}-1)
					</p>

					<p>
						V(r) = {props.varianza.varianza}/{props.varianza.n - 1}
					</p>

					<p>V(r) = {props.varianza.varianzaNumerosR}</p>
				</div>
			</div>
		</section>
	);
}
