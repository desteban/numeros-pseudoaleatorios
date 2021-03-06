import * as React from 'react';
import { PageProps } from 'gatsby';
import { Layout, Seo, Input, PruebaMedias } from '../components';

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
	semilla?: number;
	cantidadNumerosR?: number;
	respuesta: Array<Respuesta>;
	respuestaPruebasMedias: respuestaPruebaMedias;
	respuestaPruebasVarianza: respuestaPruebaVarianza;
};

type Respuesta = {
	semilla: string;
	cuadrado: number;
	numeroR: string;
};

export default class cuadradosMedios extends React.Component<PageProps, DataProps> {
	constructor(props: any) {
		super(props);

		this.state = {
			cantidadNumerosR: 5,
			semilla: 1234,
			respuesta: [],
			respuestaPruebasMedias: PruebaMediasDefault,
			respuestaPruebasVarianza: respuestaPruebaVarianzaDefault,
		};
		this.state.respuestaPruebasMedias.ver = false;
	}

	calcular() {
		this.limpiarRespuestas();
		let { semilla, cantidadNumerosR } = this.state;
		let semillaAnterior: string = `${semilla}`;

		if (String(semilla).length > 3 && semilla !== undefined && cantidadNumerosR >= 1) {
			for (let i = 0; i < cantidadNumerosR; i++) {
				let cuadrado: number = Math.pow(semilla, 2);
				let numeroR: string = calcularSemillaMedios(`${cuadrado}`);
				semilla = +numeroR;

				let respuesta: Respuesta = {
					semilla: semillaAnterior,
					cuadrado,
					numeroR,
				};

				semillaAnterior = numeroR;
				let data: respuestaPruebaMedias = PruebaDeMedias(this.state.respuesta);
				let pruebaDeVarianza: respuestaPruebaVarianza = pruebaVarianza(this.state.respuesta);

				this.agregarRespuesta(respuesta, data, pruebaDeVarianza);
			}
		}

		if (String(semilla).length <= 3 || semilla === undefined) {
			alert(
				'Para utilizar el algoritmo de cuadrados medios es necesario ingresar un numero con más de 3 dígitos'
			);
		}

		if (cantidadNumerosR <= 0) {
			alert('La cantidad de numero r debe será mayor a 0');
		}

		let data: respuestaPruebaMedias = PruebaDeMedias(this.state.respuesta);
		this.setState({ respuestaPruebasMedias: data });
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

	limpiarRespuestas() {
		this.state.respuesta.splice(0, this.state.respuesta.length);
	}

	render() {
		return (
			<Layout>
				<Seo
					title="Calculadora Cuadrados Medios"
					description={`Calculadora de números pseudoaleatorios por medio del algoritmo de cuadrados medios`}
				/>
				<h1>Calculadora algoritmo de cuadrados medios</h1>
				<div>
					<Input
						id={'semilla'}
						placeholder={'semilla'}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							let numero: number = +event.target.value;

							this.setState({ semilla: numero == 0 ? undefined : numero });
						}}
						value={this.state.semilla}
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
							<div key={this.state.respuesta.indexOf(respuesta)}>
								<p>
									Y <sub>{this.state.respuesta.indexOf(respuesta)}</sub> = ({respuesta.semilla}
									) <sup>2</sup> ={respuesta.cuadrado},
								</p>
								<p>
									X <sub>{this.state.respuesta.indexOf(respuesta) + 1}</sub> =
									{respuesta.numeroR},
								</p>
								<p>
									r<sub>{this.state.respuesta.indexOf(respuesta) + 1}</sub> = 0.
									{respuesta.numeroR}
								</p>
							</div>
						);
					})}
				</div>
			</Layout>
		);
	}
}
