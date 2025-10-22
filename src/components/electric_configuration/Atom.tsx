import './Atom.css'
import Nucleous from './Nucleous'

export default function Atom() {
	return (
		<div className="container-atom">
			<h1>Carbono</h1>
			<h2>Periodo 2 - Grupo Carbonoideos - No metales</h2>
			<div className="atom">
				<Nucleous protons={26} neutrons={56-26} />
				<div className="orbits">
					<div className="electron"></div>
					<div className="electron"></div>
					<div className="electron valencia"></div>
					<div className="electron valencia"></div>
					<div className="electron valencia"></div>
					<div className="electron valencia"></div>
				</div>
			</div>
			<div className="show-info">i</div>
			<div className="info">
				<div className="inner-shell">
					<div className="info-particle">
						<h3>ORBITAL 2S<sup>2</sup></h3>
						<p><strong>2</strong> ELECTRONES</p>
					</div>
				</div>
				<div className="outer-shell">
					<div className="info-particle">
						<h3>ORBITAL 2P<sup>2</sup></h3>
						<p><strong>4</strong> ELECTRONES</p>
					</div>
				</div>
				<div className="inner-nucleous">
					<div className="info-particle core">
						<h3 >C</h3>
						<h4>12.011</h4>
						<p><strong>6</strong> PROTONES</p>
						<p><strong>6</strong> NEUTRONES</p>
					</div>
				</div>
			</div></div>
	)
}
