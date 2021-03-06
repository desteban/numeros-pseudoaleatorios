import * as React from 'react';
import { PageProps } from 'gatsby';

import { Input, Layout, Seo, PruebaMedias } from '../components';
import {
	calcularSemillaMedios,
	PruebaDeMedias,
	respuestaPruebaMedias,
	PruebaMediasDefault,
	respuestaPruebaVarianzaDefault,
	respuestaPruebaVarianza,
	pruebaVarianza,
} from '../util';

type DataProps = {
	semilla1?: number;
	semilla2?: number;
	cantidadNumerosR?: number;
	respuesta: Array<Respuesta>;
	respuestaPruebasMedias: respuestaPruebaMedias;
	respuestaPruebasVarianza: respuestaPruebaVarianza;
};

type Respuesta = {
	id: number;
	semilla1: number;
	semilla2: number;
	numeroR: string;
	resultado: number;
	semilla: string;
};

export default class ProductosMedios extends React.Component<PageProps, DataProps> {
	constructor(props: any) {
		super(props);

		this.state = {
			respuesta: [],
			cantidadNumerosR: 5,
			semilla1: 1234,
			semilla2: 4321,
			respuestaPruebasMedias: PruebaMediasDefault,
			respuestaPruebasVarianza: respuestaPruebaVarianzaDefault,
		};
		this.state.respuestaPruebasMedias.ver = false;
	}

	calcular() {
		this.limpiarRespuestas();

		let { semilla1, semilla2, cantidadNumerosR } = this.state;

		if (
			(String(semilla1).length > 3 && String(semilla2).length > 3 && cantidadNumerosR >= 1) ||
			semilla1 != undefined ||
			semilla2 != undefined
		) {
			for (let i = 0; i < this.state.cantidadNumerosR; i++) {
				let resultado: number = semilla1 * semilla2;
				let numeroR: string = calcularSemillaMedios(`${resultado}`);

				let respuesta: Respuesta = {
					id: i,
					semilla1,
					semilla2,
					numeroR,
					resultado,
					semilla: `0.${numeroR}`,
				};

				let data: respuestaPruebaMedias = PruebaDeMedias(this.state.respuesta);
				let pruebaDeVarianza: respuestaPruebaVarianza = pruebaVarianza(this.state.respuesta);
				this.agregarRespuesta(respuesta, data, pruebaDeVarianza);

				semilla1 = semilla2;
				semilla2 = +numeroR;
			}
		}

		if (
			(String(semilla1).length <= 3 && String(semilla2).length <= 3) ||
			semilla1 == undefined ||
			semilla2 == undefined
		) {
		}

		if (cantidadNumerosR <= 0) {
			alert('La cantidad de numero r debe ser?? mayor a 0');
		}
	}

	limpiarRespuestas() {
		this.state.respuesta.splice(0, this.state.respuesta.length);
	}

	agregarRespuesta(
		resultado: Respuesta,
		PruebaDeMedias: respuestaPruebaMedias,
		varianza: respuestaPruebaVarianza
	) {
		let respuestas: Array<Respuesta> = this.state.respuesta;
		respuestas.push(resultado);

		this.setState({
			respuesta: respuestas,
			respuestaPruebasMedias: PruebaDeMedias,
			respuestaPruebasVarianza: varianza,
		});
	}

	enter(event: React.KeyboardEvent) {
		if (event.key == 'Enter') {
			this.calcular();
		}
	}

	render(): React.ReactNode {
		return (
			<Layout>
				<Seo
					title="Productos medios"
					description="Calculadora de n??meros pseudoaleatorios por medio del algoritmo de productos medios "
				/>

				<h1>Calculadora de productos medios</h1>
				<div>
					<Input
						id="semilla1"
						placeholder="Semilla 1"
						value={this.state.semilla1}
						onChange={(evt) => {
							let numero: number = +evt.target.value;
							this.setState({ semilla1: numero == 0 ? undefined : numero });
						}}
						onKeyDown={(evt) => this.enter(evt)}
					/>

					<Input
						id="semilla2"
						placeholder="Semilla 2"
						value={this.state.semilla2}
						onChange={(evt) => {
							let numero: number = +evt.target.value;
							this.setState({ semilla2: numero == 0 ? undefined : numero });
						}}
						onKeyDown={(evt) => this.enter(evt)}
					/>

					<Input
						id={'cantidadNumerosR'}
						placeholder={'Cantidad de numeros r'}
						value={this.state.cantidadNumerosR}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							let numero: number = +event.target.value;

							this.setState({
								cantidadNumerosR: numero == 0 ? undefined : numero,
							});
						}}
						onKeyDown={(evt) => this.enter(evt)}
					/>

					<button className="btn" onClick={() => this.calcular()}>
						Calcular
					</button>
				</div>

				{this.state.respuestaPruebasMedias.ver
					? PruebaMedias({
							prueba: this.state.respuestaPruebasMedias,
							varianza: this.state.respuestaPruebasVarianza,
					  })
					: null}

				<div className="resultado card round">
					<strong>Resultados:</strong>

					{this.state.respuesta.map((respuesta) => {
						return (
							<div key={respuesta.id}>
								<p>
									Y<sub>{respuesta.id}</sub> = ({respuesta.semilla1}) ({respuesta.semilla2}) ={' '}
									{respuesta.resultado}
								</p>
								<p>
									X<sub>{respuesta.id + 2}</sub> = {respuesta.numeroR}
								</p>
								<p>
									r<sub>{respuesta.id + 1}</sub> = 0.{respuesta.numeroR}
								</p>
							</div>
						);
					})}
				</div>
			</Layout>
		);
	}
}
