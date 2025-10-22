export function formatAtomicMass(value: number): string {
	// Redondear a 2 decimales para tener base
	const rounded = Math.round(value * 100) / 100;

	// Si está muy cerca de un número entero, redondear al entero
	if (Math.abs(rounded - Math.round(rounded)) < 0.05) {
		return Math.round(rounded).toString();
	}

	// Si tiene decimales, redondear a 1 decimal significativo
	const oneDecimal = Math.round(rounded * 10) / 10;

	// Convertir a string y limpiar ceros si sobran
	return oneDecimal.toString().replace(/\.0$/, '');
}