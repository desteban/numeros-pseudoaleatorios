export type respuestaPruebaVarianza = {
	varianzaNumerosR: number;
	LimiteInferior: number;
	LimiteSuperior: number;
	valorAceptacion: boolean;
};

export const respuestaPruebaVarianzaDefault: respuestaPruebaVarianza = {
	varianzaNumerosR: 0,
	LimiteInferior: 0,
	LimiteSuperior: 0,
	valorAceptacion: false,
};

export function name(lista: Array<any>): respuestaPruebaVarianza {
	let respuesta: respuestaPruebaVarianza = respuestaPruebaVarianzaDefault;
	let n = lista.length;
	let sumatoria: number = 0;
	let promedioR: number = 0;
	let alpha: number = 0.05;

	lista.forEach((respuesta) => {
		sumatoria += +`0.${respuesta.numeroR}`;
	});
	promedioR = sumatoria / n;

	sumatoria = 0;
	lista.forEach((respuesta) => {
		let numero: number = +`0.${respuesta.numeroR}`;

		sumatoria += Math.pow(numero - promedioR, 2);
	});

	respuesta.varianzaNumerosR = sumatoria / (n - 1);

	return respuesta;
}
