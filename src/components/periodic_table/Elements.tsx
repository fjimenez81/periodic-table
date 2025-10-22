
import Cell from './Cell';

export default function Elements() {

	const periodicTable = [
		{ type: "no-metals", symbol: "H", atomicNumber: 1, atomicMass: 1.008, name: "Hidrógeno" },
		{ type: "noble-gases", symbol: "He", atomicNumber: 2, atomicMass: 4.0026, name: "Helio" },
		{ type: "alkali-metals", symbol: "Li", atomicNumber: 3, atomicMass: 6.94, name: "Litio" },
		{ type: "alkaline-earth", symbol: "Be", atomicNumber: 4, atomicMass: 9.0122, name: "Berilio" },
		{ type: "metalloids", symbol: "B", atomicNumber: 5, atomicMass: 10.81, name: "Boro" },
		{ type: "no-metals", symbol: "C", atomicNumber: 6, atomicMass: 12.011, name: "Carbono" },
		{ type: "no-metals", symbol: "N", atomicNumber: 7, atomicMass: 14.007, name: "Nitrógeno" },
		{ type: "no-metals", symbol: "O", atomicNumber: 8, atomicMass: 15.999, name: "Oxígeno" },
		{ type: "halogens", symbol: "F", atomicNumber: 9, atomicMass: 18.998, name: "Flúor" },
		{ type: "noble-gases", symbol: "Ne", atomicNumber: 10, atomicMass: 20.180, name: "Neón" },
		{ type: "alkali-metals", symbol: "Na", atomicNumber: 11, atomicMass: 22.990, name: "Sodio" },
		{ type: "alkaline-earth", symbol: "Mg", atomicNumber: 12, atomicMass: 24.305, name: "Magnesio" },
		{ type: "other-metals", symbol: "Al", atomicNumber: 13, atomicMass: 26.982, name: "Aluminio" },
		{ type: "metalloids", symbol: "Si", atomicNumber: 14, atomicMass: 28.085, name: "Silicio" },
		{ type: "no-metals", symbol: "P", atomicNumber: 15, atomicMass: 30.974, name: "Fósforo" },
		{ type: "no-metals", symbol: "S", atomicNumber: 16, atomicMass: 32.06, name: "Azufre" },
		{ type: "halogens", symbol: "Cl", atomicNumber: 17, atomicMass: 35.45, name: "Cloro" },
		{ type: "noble-gases", symbol: "Ar", atomicNumber: 18, atomicMass: 39.948, name: "Argón" },
		{ type: "alkali-metals", symbol: "K", atomicNumber: 19, atomicMass: 39.098, name: "Potasio" },
		{ type: "alkaline-earth", symbol: "Ca", atomicNumber: 20, atomicMass: 40.078, name: "Calcio" },
		{ type: "transition-metals", symbol: "Sc", atomicNumber: 21, atomicMass: 44.956, name: "Escandio" },
		{ type: "transition-metals", symbol: "Ti", atomicNumber: 22, atomicMass: 47.867, name: "Titanio" },
		{ type: "transition-metals", symbol: "V", atomicNumber: 23, atomicMass: 50.942, name: "Vanadio" },
		{ type: "transition-metals", symbol: "Cr", atomicNumber: 24, atomicMass: 51.996, name: "Cromo" },
		{ type: "transition-metals", symbol: "Mn", atomicNumber: 25, atomicMass: 54.938, name: "Manganeso" },
		{ type: "transition-metals", symbol: "Fe", atomicNumber: 26, atomicMass: 55.845, name: "Hierro" },
		{ type: "transition-metals", symbol: "Co", atomicNumber: 27, atomicMass: 58.933, name: "Cobalto" },
		{ type: "transition-metals", symbol: "Ni", atomicNumber: 28, atomicMass: 58.693, name: "Níquel" },
		{ type: "transition-metals", symbol: "Cu", atomicNumber: 29, atomicMass: 63.546, name: "Cobre" },
		{ type: "transition-metals", symbol: "Zn", atomicNumber: 30, atomicMass: 65.38, name: "Zinc" },
		{ type: "other-metals", symbol: "Ga", atomicNumber: 31, atomicMass: 69.723, name: "Galio" },
		{ type: "metalloids", symbol: "Ge", atomicNumber: 32, atomicMass: 72.630, name: "Germanio" },
		{ type: "metalloids", symbol: "As", atomicNumber: 33, atomicMass: 74.922, name: "Arsénico" },
		{ type: "no-metals", symbol: "Se", atomicNumber: 34, atomicMass: 78.971, name: "Selenio" },
		{ type: "halogens", symbol: "Br", atomicNumber: 35, atomicMass: 79.904, name: "Bromo" },
		{ type: "noble-gases", symbol: "Kr", atomicNumber: 36, atomicMass: 83.798, name: "Kriptón" },
		{ type: "alkali-metals", symbol: "Rb", atomicNumber: 37, atomicMass: 85.468, name: "Rubidio" },
		{ type: "alkaline-earth", symbol: "Sr", atomicNumber: 38, atomicMass: 87.62, name: "Estroncio" },
		{ type: "transition-metals", symbol: "Y", atomicNumber: 39, atomicMass: 88.906, name: "Itrio" },
		{ type: "transition-metals", symbol: "Zr", atomicNumber: 40, atomicMass: 91.224, name: "Circonio" },
		{ type: "transition-metals", symbol: "Nb", atomicNumber: 41, atomicMass: 92.906, name: "Niobio" },
		{ type: "transition-metals", symbol: "Mo", atomicNumber: 42, atomicMass: 95.95, name: "Molibdeno" },
		{ type: "transition-metals", symbol: "Tc", atomicNumber: 43, atomicMass: 98, name: "Tecnecio" },
		{ type: "transition-metals", symbol: "Ru", atomicNumber: 44, atomicMass: 101.07, name: "Rutenio" },
		{ type: "transition-metals", symbol: "Rh", atomicNumber: 45, atomicMass: 102.906, name: "Rodio" },
		{ type: "transition-metals", symbol: "Pd", atomicNumber: 46, atomicMass: 106.42, name: "Paladio" },
		{ type: "transition-metals", symbol: "Ag", atomicNumber: 47, atomicMass: 107.868, name: "Plata" },
		{ type: "transition-metals", symbol: "Cd", atomicNumber: 48, atomicMass: 112.414, name: "Cadmio" },
		{ type: "other-metals", symbol: "In", atomicNumber: 49, atomicMass: 114.818, name: "Indio" },
		{ type: "other-metals", symbol: "Sn", atomicNumber: 50, atomicMass: 118.710, name: "Estaño" },
		{ type: "metalloids", symbol: "Sb", atomicNumber: 51, atomicMass: 121.760, name: "Antimonio" },
		{ type: "metalloids", symbol: "Te", atomicNumber: 52, atomicMass: 127.60, name: "Telurio" },
		{ type: "halogens", symbol: "I", atomicNumber: 53, atomicMass: 126.904, name: "Yodo" },
		{ type: "noble-gases", symbol: "Xe", atomicNumber: 54, atomicMass: 131.293, name: "Xenón" },
		{ type: "alkali-metals", symbol: "Cs", atomicNumber: 55, atomicMass: 132.905, name: "Cesio" },
		{ type: "alkaline-earth", symbol: "Ba", atomicNumber: 56, atomicMass: 137.327, name: "Bario" },

		{ type: "transition-metals", symbol: "Lu", atomicNumber: 71, atomicMass: 174.967, name: "Lutecio" },
		{ type: "transition-metals", symbol: "Hf", atomicNumber: 72, atomicMass: 178.49, name: "Hafnio" },
		{ type: "transition-metals", symbol: "Ta", atomicNumber: 73, atomicMass: 180.948, name: "Tántalo" },
		{ type: "transition-metals", symbol: "W", atomicNumber: 74, atomicMass: 183.84, name: "Wolframio" },
		{ type: "transition-metals", symbol: "Re", atomicNumber: 75, atomicMass: 186.207, name: "Renio" },
		{ type: "transition-metals", symbol: "Os", atomicNumber: 76, atomicMass: 190.23, name: "Osmio" },
		{ type: "transition-metals", symbol: "Ir", atomicNumber: 77, atomicMass: 192.217, name: "Iridio" },
		{ type: "transition-metals", symbol: "Pt", atomicNumber: 78, atomicMass: 195.084, name: "Platino" },
		{ type: "transition-metals", symbol: "Au", atomicNumber: 79, atomicMass: 196.967, name: "Oro" },
		{ type: "transition-metals", symbol: "Hg", atomicNumber: 80, atomicMass: 200.592, name: "Mercurio" },
		{ type: "other-metals", symbol: "Tl", atomicNumber: 81, atomicMass: 204.38, name: "Talio" },
		{ type: "other-metals", symbol: "Pb", atomicNumber: 82, atomicMass: 207.2, name: "Plomo" },
		{ type: "other-metals", symbol: "Bi", atomicNumber: 83, atomicMass: 208.980, name: "Bismuto" },
		{ type: "metalloids", symbol: "Po", atomicNumber: 84, atomicMass: 209, name: "Polonio" },
		{ type: "halogens", symbol: "At", atomicNumber: 85, atomicMass: 210, name: "Astato" },
		{ type: "noble-gases", symbol: "Rn", atomicNumber: 86, atomicMass: 222, name: "Radón" },
		{ type: "alkali-metals", symbol: "Fr", atomicNumber: 87, atomicMass: 223, name: "Francio" },
		{ type: "alkaline-earth", symbol: "Ra", atomicNumber: 88, atomicMass: 226, name: "Radio" },
		{ type: "transition-metals", symbol: "Lr", atomicNumber: 103, atomicMass: 266, name: "Laurencio" },
		{ type: "transition-metals", symbol: "Rf", atomicNumber: 104, atomicMass: 267, name: "Rutherfordio" },
		{ type: "transition-metals", symbol: "Db", atomicNumber: 105, atomicMass: 268, name: "Dubnio" },
		{ type: "transition-metals", symbol: "Sg", atomicNumber: 106, atomicMass: 269, name: "Seaborgio" },
		{ type: "transition-metals", symbol: "Bh", atomicNumber: 107, atomicMass: 270, name: "Bohrio" },
		{ type: "transition-metals", symbol: "Hs", atomicNumber: 108, atomicMass: 277, name: "Hassio" },
		{ type: "transition-metals", symbol: "Mt", atomicNumber: 109, atomicMass: 278, name: "Meitnerio" },
		{ type: "transition-metals", symbol: "Ds", atomicNumber: 110, atomicMass: 281, name: "Darmstadtio" },
		{ type: "transition-metals", symbol: "Rg", atomicNumber: 111, atomicMass: 282, name: "Roentgenio" },
		{ type: "transition-metals", symbol: "Cn", atomicNumber: 112, atomicMass: 285, name: "Copernicio" },
		{ type: "other-metals", symbol: "Nh", atomicNumber: 113, atomicMass: 286, name: "Nihonio" },
		{ type: "other-metals", symbol: "Fl", atomicNumber: 114, atomicMass: 289, name: "Flerovio" },
		{ type: "other-metals", symbol: "Mc", atomicNumber: 115, atomicMass: 290, name: "Moscovio" },
		{ type: "other-metals", symbol: "Lv", atomicNumber: 116, atomicMass: 293, name: "Livermorio" },
		{ type: "halogens", symbol: "Ts", atomicNumber: 117, atomicMass: 294, name: "Tenesino" },
		{ type: "noble-gases", symbol: "Og", atomicNumber: 118, atomicMass: 294, name: "Oganesón" }
	];

	const lantanidos = [
		{ type: "lanthanides", symbol: "La", atomicNumber: 57, atomicMass: 138.905, name: "Lantano" },
		{ type: "lanthanides", symbol: "Ce", atomicNumber: 58, atomicMass: 140.116, name: "Cerio" },
		{ type: "lanthanides", symbol: "Pr", atomicNumber: 59, atomicMass: 140.908, name: "Praseodimio" },
		{ type: "lanthanides", symbol: "Nd", atomicNumber: 60, atomicMass: 144.242, name: "Neodimio" },
		{ type: "lanthanides", symbol: "Pm", atomicNumber: 61, atomicMass: 145, name: "Prometio" },
		{ type: "lanthanides", symbol: "Sm", atomicNumber: 62, atomicMass: 150.36, name: "Samario" },
		{ type: "lanthanides", symbol: "Eu", atomicNumber: 63, atomicMass: 151.964, name: "Europio" },
		{ type: "lanthanides", symbol: "Gd", atomicNumber: 64, atomicMass: 157.25, name: "Gadolinio" },
		{ type: "lanthanides", symbol: "Tb", atomicNumber: 65, atomicMass: 158.925, name: "Terbio" },
		{ type: "lanthanides", symbol: "Dy", atomicNumber: 66, atomicMass: 162.500, name: "Disprosio" },
		{ type: "lanthanides", symbol: "Ho", atomicNumber: 67, atomicMass: 164.930, name: "Holmio" },
		{ type: "lanthanides", symbol: "Er", atomicNumber: 68, atomicMass: 167.259, name: "Erbio" },
		{ type: "lanthanides", symbol: "Tm", atomicNumber: 69, atomicMass: 168.934, name: "Tulio" },
		{ type: "lanthanides", symbol: "Yb", atomicNumber: 70, atomicMass: 173.045, name: "Iterbio" }];

	const actinidos = [
		{ type: "actinides", symbol: "Ac", atomicNumber: 89, atomicMass: 227, name: "Actinio" },
		{ type: "actinides", symbol: "Th", atomicNumber: 90, atomicMass: 232.038, name: "Torio" },
		{ type: "actinides", symbol: "Pa", atomicNumber: 91, atomicMass: 231.036, name: "Protactinio" },
		{ type: "actinides", symbol: "U", atomicNumber: 92, atomicMass: 238.028, name: "Uranio" },
		{ type: "actinides", symbol: "Np", atomicNumber: 93, atomicMass: 237, name: "Neptunio" },
		{ type: "actinides", symbol: "Pu", atomicNumber: 94, atomicMass: 244, name: "Plutonio" },
		{ type: "actinides", symbol: "Am", atomicNumber: 95, atomicMass: 243, name: "Americio" },
		{ type: "actinides", symbol: "Cm", atomicNumber: 96, atomicMass: 247, name: "Curio" },
		{ type: "actinides", symbol: "Bk", atomicNumber: 97, atomicMass: 247, name: "Berkelio" },
		{ type: "actinides", symbol: "Cf", atomicNumber: 98, atomicMass: 251, name: "Californio" },
		{ type: "actinides", symbol: "Es", atomicNumber: 99, atomicMass: 252, name: "Einsteinio" },
		{ type: "actinides", symbol: "Fm", atomicNumber: 100, atomicMass: 257, name: "Fermio" },
		{ type: "actinides", symbol: "Md", atomicNumber: 101, atomicMass: 258, name: "Mendelevio" },
		{ type: "actinides", symbol: "No", atomicNumber: 102, atomicMass: 259, name: "Nobelio" },
	];

	return (
		<>
			<div className="grid-container">

				{
					periodicTable.map((element) => (
						<Cell
							key={element.atomicNumber}
							type={element.type}
							symbol={element.symbol}
							atomicNumber={element.atomicNumber}
							atomicMass={element.atomicMass}
							name={element.name}
						/>
					))
				}
				<div className="grid-items no-metals">
					<div className="grid-items__header">
						<p className="grid-items__number-left">
							Número <br />
							Atomico
						</p>
						<p className="grid-items__number-right">
							Masa <br />
							Atomica
						</p>
					</div>
					<p className="grid-items__symbol">
						<br />
						Símbolo Químico
					</p>
					<p className="grid-items__name">
						<br />
						Nombre
					</p>
				</div>
			</div>
			<div className="grid-container--bottom">
				{
					lantanidos.map((element) => (
						<Cell
							key={element.atomicNumber}
							type={element.type}
							symbol={element.symbol}
							atomicNumber={element.atomicNumber}
							atomicMass={element.atomicMass}
							name={element.name}
						/>
					))
				}
				{
					actinidos.map((element) => (
						<Cell
							key={element.atomicNumber}
							type={element.type}
							symbol={element.symbol}
							atomicNumber={element.atomicNumber}
							atomicMass={element.atomicMass}
							name={element.name}
						/>
					))
				}
			</div>
		</>
	)
}
