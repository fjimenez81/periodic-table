
interface NucleousProps {
	protons: number;
	neutrons: number;
}
export default function Nucleous({ protons, neutrons }: NucleousProps) {

	function splitNumberInChunksByValue(value: number, chunks: number): number[] {
		const base = Math.floor(value / chunks);
		const remainder = value % chunks;
		const result = Array(chunks).fill(base);

		for (let i = 0; i < remainder; i++) {
			result[i] += 1;
		}

		return result;
	}
	console.log("PROTONES", splitNumberInChunksByValue(protons, 3))
	console.log("NEUTRONES", splitNumberInChunksByValue(neutrons, 3))

	return (
		<div className="nucleous">
			<div className="row">
				<div className="proton"></div>
				<div className="proton"></div>
				<div className="neutron"></div>
				<div className="neutron"></div>
			</div>
			<div className="row">
				<div className="neutron "></div>
				<div className="neutron "></div>
				<div className="proton"></div>
				<div className="proton"></div>
			</div>
			<div className="row">
				<div className="proton"></div>
				<div className="proton"></div>
				<div className="neutron"></div>
				<div className="neutron"></div>
			</div>
		</div>
	)
}
