import * as React from 'react';
import { PageProps } from 'gatsby';
import { Input, PruebaMedias, Seo, Layout } from '../components';
import { respuestaPruebaMedias, PruebaMediasDefault, PruebaDeMedias } from '../util';

type DataProps = {
	semilla: number;
	constante: number;
	aditiva: number;
	modulo: number;
	cantidadNumerosR?: number;
	respuesta: Array<Respuesta>;
	respuestaPruebasMedias: respuestaPruebaMedias;
};

type Respuesta = {
	id: number;
	modulo: number;
	semilla: string;
	numeroR: string;
	aditiva: number;
	constante: number;
	resultado: number;
};

export default class algoritmoLineal extends React.Component<PageProps, DataProps> {
	constructor(props: PageProps) {
		super(props);

		this.state = {
			semilla: 1234,
			cantidadNumerosR: 5,
			constante: 2,
			aditiva: 10,
			modulo: 90,
			respuesta: [],
			respuestaPruebasMedias: PruebaMediasDefault,
		};
	}

	calcular() {
		this.limpiarRespuestas();
		let { semilla, constante, aditiva, modulo, cantidadNumerosR } = this.state;

		if (semilla > 0 && constante > 0 && aditiva > 0 && modulo > 0) {
			for (let i = 0; i < cantidadNumerosR; i++) {
				let resultado = (constante * semilla + aditiva) % modulo;

				let respuesta: Respuesta = {
					id: i + 1,
					aditiva,
					constante,
					modulo,
					semilla: `${semilla}`,
					numeroR: `${resultado}${resultado}`,
					resultado,
				};
				semilla = respuesta.resultado;

				let data: respuestaPruebaMedias = PruebaDeMedias(this.state.respuesta);

				this.agregarRespuesta(respuesta, data);
			}
		}

		if (!(semilla > 0 && constante > 0 && aditiva > 0 && modulo > 0)) {
			alert('Los datos deben ser mayor a 0');
		}

		if (cantidadNumerosR <= 0) {
			alert('La cantidad de numero r debe será mayor a 0');
		}
	}

	enter(event: React.KeyboardEvent) {
		if (event.key == 'Enter') {
			this.calcular();
		}
	}

	limpiarRespuestas() {
		this.state.respuesta.splice(0, this.state.respuesta.length);
	}

	agregarRespuesta(resultado: Respuesta, PruebaDeMedias: respuestaPruebaMedias) {
		let respuestas: Array<Respuesta> = this.state.respuesta;
		respuestas.push(resultado);

		this.setState({ respuesta: respuestas });
	}

	render(): React.ReactNode {
		return (
			<Layout>
				<Seo title="Algoritmo Lineal" />
				<h1>Algoritmo Lineal</h1>

				<div>
					<Input
						id="semilla"
						placeholder="Semilla"
						value={this.state.semilla}
						onKeyDown={(evt) => this.enter(evt)}
						onChange={(evt) => {
							let numero: number = +evt.target.value;
							this.setState({ semilla: numero == 0 ? undefined : numero });
						}}
					/>

					<Input
						id="constante"
						placeholder="Constante Multiplicativa"
						value={this.state.constante}
						onKeyDown={(evt) => this.enter(evt)}
						onChange={(evt) => {
							let numero: number = +evt.target.value;
							this.setState({ constante: numero == 0 ? undefined : numero });
						}}
					/>

					<Input
						id="aditiva"
						placeholder="Constante Aditiva"
						value={this.state.aditiva}
						onKeyDown={(evt) => this.enter(evt)}
						onChange={(evt) => {
							let numero: number = +evt.target.value;
							this.setState({ aditiva: numero == 0 ? undefined : numero });
						}}
					/>

					<Input
						id="modulo"
						placeholder="Modulo"
						value={this.state.modulo}
						onKeyDown={(evt) => this.enter(evt)}
						onChange={(evt) => {
							let numero: number = +evt.target.value;
							this.setState({ modulo: numero == 0 ? undefined : numero });
						}}
					/>

					<Input
						id={'cantidadNumerosR'}
						placeholder={'Cantidad de numeros r'}
						value={this.state.cantidadNumerosR}
						onKeyDown={(evt) => this.enter(evt)}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							let numero: number = +event.target.value;

							this.setState({
								cantidadNumerosR: numero == 0 ? undefined : numero,
							});
						}}
					/>

					<button className="btn" onClick={() => this.calcular()}>
						Calcular
					</button>
				</div>
				{this.state.respuestaPruebasMedias.ver
					? PruebaMedias({ prueba: this.state.respuestaPruebasMedias })
					: null}

				<div className="resultado card round">
					<strong>Resultados:</strong>

					{this.state.respuesta.map((respuesta) => {
						return (
							<div key={respuesta.id}>
								<p>
									X<sub>{respuesta.id}</sub>({respuesta.constante} * {respuesta.semilla} +{' '}
									{respuesta.aditiva}) mod {respuesta.modulo} = {respuesta.resultado}
								</p>

								<p>
									r<sub>{respuesta.id}</sub>: /{respuesta.modulo - 1} = 0.{respuesta.numeroR}
								</p>
							</div>
						);
					})}
				</div>
			</Layout>
		);
	}
}
