import * as React from 'react';
import { PageProps } from 'gatsby';

import { Input, Layout, Seo, PruebaMedias } from '../components';
import {
	calcularSemillaMedios,
	PruebaDeMedias,
	respuestaPruebaMedias,
	PruebaMediasDefault,
	respuestaPruebaVarianza,
	respuestaPruebaVarianzaDefault,
	pruebaVarianza,
} from '../util';

type DataProps = {
	multiplicador?: number;
	semilla?: number;
	cantidadNumerosR?: number;
	respuesta: Array<Respuesta>;
	respuestaPruebasMedias: respuestaPruebaMedias;
	respuestaPruebasVarianza: respuestaPruebaVarianza;
};

type Respuesta = {
	id: number;
	multiplicador: number;
	semilla: number;
	numeroR: string;
	resultado: number;
};

export default class ProductosMedios extends React.Component<PageProps, DataProps> {
	constructor(props: any) {
		super(props);

		this.state = {
			respuesta: [],
			cantidadNumerosR: 5,
			semilla: 1234,
			multiplicador: 4321,
			respuestaPruebasMedias: PruebaMediasDefault,
			respuestaPruebasVarianza: respuestaPruebaVarianzaDefault,
		};
		this.state.respuestaPruebasMedias.ver = false;
	}

	calcular() {
		this.limpiarRespuestas();

		let { multiplicador, semilla, cantidadNumerosR } = this.state;

		if (
			(String(multiplicador).length > 3 &&
				String(semilla).length > 3 &&
				cantidadNumerosR >= 1) ||
			multiplicador != undefined ||
			semilla != undefined
		) {
			for (let i = 0; i < this.state.cantidadNumerosR; i++) {
				let resultado: number = multiplicador * semilla;
				let numeroR: string = calcularSemillaMedios(`${resultado}`);

				let respuesta: Respuesta = {
					id: i,
					multiplicador,
					semilla,
					numeroR,
					resultado,
				};

				let data: respuestaPruebaMedias = PruebaDeMedias(this.state.respuesta);
				let pruebaDeVarianza: respuestaPruebaVarianza = pruebaVarianza(this.state.respuesta);

				this.agregarRespuesta(respuesta, data, pruebaDeVarianza);
				semilla = +numeroR;
			}
		}

		if (
			(String(multiplicador).length <= 3 && String(semilla).length <= 3) ||
			multiplicador == undefined ||
			semilla == undefined
		) {
		}

		if (cantidadNumerosR <= 0) {
			alert('La cantidad de numero r debe será mayor a 0');
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
					description="Calculadora de números pseudoaleatorios por medio del algoritmo de multiplicador constante"
				/>

				<h1>Calculadora de productos medios</h1>
				<div>
					<Input
						id="multiplicador"
						placeholder="Multiplicador"
						value={this.state.multiplicador}
						onChange={(evt) => {
							let numero: number = +evt.target.value;
							this.setState({ multiplicador: numero == 0 ? undefined : numero });
						}}
						onKeyDown={(evt) => this.enter(evt)}
					/>

					<Input
						id="semilla"
						placeholder="Semilla"
						value={this.state.semilla}
						onChange={(evt) => {
							let numero: number = +evt.target.value;
							this.setState({ semilla: numero == 0 ? undefined : numero });
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
									Y<sub>{respuesta.id}</sub> = ({respuesta.multiplicador}) ({respuesta.semilla}
									) = {respuesta.resultado}
								</p>
								<p>
									X<sub>{respuesta.id + 1}</sub> = {respuesta.numeroR}
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
