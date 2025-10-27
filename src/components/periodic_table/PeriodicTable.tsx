import './PeriodicTable.css'
import Legend from './Legend'
import Elements from './Elements'

export default function PeriodicTable() {
	return (
		<div>
			<h1 className="title">Tabla periódica de los elementos</h1>
			<Legend />
			<Elements />
		</div>
	)
}
