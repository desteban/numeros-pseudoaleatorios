export default function calcularSemillaMedios(numero: string) {
	let cantidad: number = (numero.length - 4) / 2;
	let semilla: string;

	if (numero.length % 2 == 0) {
		semilla = numero.slice(cantidad, -cantidad);
	}

	if (numero.length % 2 == 1) {
		return calcularSemillaMedios(`0${numero}`);
	}

	return semilla;
}
