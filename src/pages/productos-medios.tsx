import * as React from 'react';
import { PageProps } from 'gatsby';

import { Input, Layout, Seo } from '../components';

type DataProps = {
	semilla1?: number;
	semilla2?: number;
	cantidadNumerosR?: number;
	respuesta: Array<Respuesta>;
};

type Respuesta = {
	semilla1: number;
	semilla2: number;
	numeoR: string;
	resultado: number;
	semilla: string;
};

export default class ProductosMedios extends React.Component<PageProps, DataProps> {
	constructor(props: any) {
		super(props);

		this.state = { respuesta: [], cantidadNumerosR: 2, semilla1: 5015, semilla2: 5734 };
	}

	calcular() {}

	enter(event: React.KeyboardEvent) {}

	render(): React.ReactNode {
		return (
			<Layout>
				<Seo title="Productos medios" />

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
					/>

					<Input
						id="semilla2"
						placeholder="Semilla 2"
						value={this.state.semilla2}
						onChange={(evt) => {
							let numero: number = +evt.target.value;
							this.setState({ semilla2: numero == 0 ? undefined : numero });
						}}
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

				<div className="resultado card round">
					<strong>Resultados:</strong>

					{this.state.respuesta.map((respuesta) => {
						return <p>Hola</p>;
					})}
				</div>
			</Layout>
		);
	}
}
