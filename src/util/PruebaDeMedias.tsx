type respuesta = {
	semilla: number;
};

export type respuestaPruebaMedias = {
	HipotesisNula: number;
	HipotesisAlternativa: number;
	promedioR: number;
	LimiteInferior: number;
	LimiteSuperior: number;
	valorAceptacion: boolean;
};

export const PruebaMediasDefault: respuestaPruebaMedias = {
	HipotesisAlternativa: 0.5,
	HipotesisNula: 0.5,
	promedioR: 0,
	LimiteInferior: 0,
	LimiteSuperior: 0,
	valorAceptacion: false,
};

export default function PruebaDeMedias(lista: Array<any>): respuestaPruebaMedias {
	let Zalphamedios: number = 1.95996;
	let respuesta: respuestaPruebaMedias = PruebaMediasDefault;

	let n: number = lista.length;
	let sumatoria: number = 0;

	lista.forEach((respuesta) => {
		let numero: number = +`0.${respuesta.numeroR}`;

		sumatoria += numero;
	});

	let promedioR: number = (1 / n) * sumatoria;
	respuesta.promedioR = +promedioR.toFixed(5);

	let raiz = Math.sqrt(12 * n);
	respuesta.LimiteInferior = +(0.5 - Zalphamedios * (1 / raiz)).toFixed(5);
	respuesta.LimiteSuperior = +(0.5 + Zalphamedios * (1 / raiz)).toFixed(5);

	if (
		respuesta.promedioR > respuesta.LimiteInferior &&
		respuesta.promedioR < respuesta.LimiteSuperior
	) {
		respuesta.valorAceptacion = true;
	}

	return respuesta;
}
