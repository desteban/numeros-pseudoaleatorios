import * as React from 'react';
import { PageProps } from 'gatsby';

import { Input, Layout, Seo, PruebaMedias } from '../components';
import {
	calcularSemillaMedios,
	PruebaDeMedias,
	respuestaPruebaMedias,
	PruebaMediasDefault,
} from '../util';

type DataProps = {
	semilla1?: number;
	semilla2?: number;
	cantidadNumerosR?: number;
	respuesta: Array<Respuesta>;
	respuestaPruebasMedias: respuestaPruebaMedias;
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
			cantidadNumerosR: 1,
			semilla1: 1234,
			semilla2: 4321,
			respuestaPruebasMedias: PruebaMediasDefault,
		};
	}

	calcular() {
		this.limpiarRespuestas();

		let semilla1: number = this.state.semilla1;
		let semilla2: number = this.state.semilla2;
		let cantidadNumerosR: number = this.state.cantidadNumerosR;

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

				this.agregarRespuesta(respuesta);

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
			alert('La cantidad de numero r debe será mayor a 0');
		}

		let data: respuestaPruebaMedias = PruebaDeMedias(this.state.respuesta);
		this.setState({ respuestaPruebasMedias: data });
	}

	limpiarRespuestas() {
		this.state.respuesta.splice(0, this.state.respuesta.length);
	}

	agregarRespuesta(resultado: Respuesta) {
		let respuestas: Array<Respuesta> = this.state.respuesta;
		respuestas.push(resultado);

		this.setState({ respuesta: respuestas });
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
					description="Calculadora de algoritmo de productos medios"
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

				<PruebaMedias prueba={this.state.respuestaPruebasMedias} />

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
