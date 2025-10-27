import { formatAtomicMass } from "@/utils/formatAtomicMass";

interface CellProps {

	type?: string;
	symbol: string;
	atomicNumber: number;
	atomicMass: number;
	name: string;
}

export default function Cell({ symbol, atomicNumber, atomicMass, name }: CellProps) {


	return (
		<>
			<div className="grid-items__header">
				<p className="grid-items__number-left">{atomicNumber}</p>
				<p className="grid-items__number-right">{formatAtomicMass(atomicMass)}</p>
			</div>
			<p className="grid-items__symbol">{symbol}</p>
			<p className="grid-items__name">{name}</p>
		</>
	)
}
