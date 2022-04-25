export type respuestaPruebaVarianza = {
	varianzaNumerosR: number;
	promedio: number;
	varianza: number;
	n: number;
};

export const respuestaPruebaVarianzaDefault: respuestaPruebaVarianza = {
	varianzaNumerosR: 0,
	promedio: 0,
	varianza: 0,
	n: 0,
};

export function pruebaVarianza(lista: Array<any>): respuestaPruebaVarianza {
	let respuesta: respuestaPruebaVarianza = respuestaPruebaVarianzaDefault;
	respuesta.n = lista.length + 1;
	let sumatoria: number = 0;
	let promedioR: number = 0;

	lista.forEach((respuesta) => {
		sumatoria += +`0.${respuesta.numeroR}`;
	});
	promedioR = +(sumatoria / respuesta.n).toFixed(5);
	respuesta.promedio = promedioR;

	sumatoria = 0;
	lista.forEach((respuesta) => {
		let numero: number = +`0.${respuesta.numeroR}`;

		sumatoria += Math.pow(numero - promedioR, 2);
	});
	sumatoria = +sumatoria.toFixed(5);
	respuesta.varianza = sumatoria;
	respuesta.varianzaNumerosR = +(sumatoria / (respuesta.n - 1)).toFixed(5);

	return respuesta;
}
