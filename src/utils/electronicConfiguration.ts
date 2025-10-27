import type { Sublevel } from "../interfaces/Sublevel";
export function electronicConfiguration(electrones: number): Sublevel[] {
	const orbitales = [
		["1s", 2],
		["2s", 2],
		["2p", 6],
		["3s", 2],
		["3p", 6],
		["4s", 2],
		["3d", 10],
		["4p", 6],
		["5s", 2],
		["4d", 10],
		["5p", 6],
		["6s", 2],
		["4f", 14],
		["5d", 10],
		["6p", 6],
		["7s", 2],
		["5f", 14],
		["6d", 10],
		["7p", 6],
	];

	let restante = electrones;
	const configuracion: Sublevel[] = [];

	for (const [nombre, capacidad] of orbitales) {
		if (restante <= 0) break;
		const ocupados = Math.min(restante, capacidad as number);
		configuracion.push({ name: nombre, electrons: ocupados } as Sublevel);
		restante -= ocupados;
	}

	return configuracion;
}