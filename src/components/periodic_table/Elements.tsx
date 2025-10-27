import { periodicTable, lantanidos, actinidos } from '@/data/elements';
import { Link } from 'wouter';
import Cell from './Cell';

export default function Elements() {

	return (
		<>
			<div className="grid-container">

				{
					periodicTable.map((element) => (
						<div className={`grid-items ${element.type}`} key={element.atomicNumber}>
							<Link to={`/atom/${element.atomicNumber}`} >
								<Cell
									key={element.atomicNumber}
									type={element.type}
									symbol={element.symbol}
									atomicNumber={element.atomicNumber}
									atomicMass={element.atomicMass}
									name={element.name}
								/>
							</Link>
						</div>
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
						<div className={`grid-items ${element.type}`} key={element.atomicNumber}>
							<Link to={`/atom/${element.atomicNumber}`} >
								<Cell
									key={element.atomicNumber}
									type={element.type}
									symbol={element.symbol}
									atomicNumber={element.atomicNumber}
									atomicMass={element.atomicMass}
									name={element.name}
								/>
							</Link>
						</div>
					))
				}
				{
					actinidos.map((element) => (
						<div className={`grid-items ${element.type}`} key={element.atomicNumber}>
							<Link to={`/atom/${element.atomicNumber}`} >
								<Cell
									key={element.atomicNumber}
									type={element.type}
									symbol={element.symbol}
									atomicNumber={element.atomicNumber}
									atomicMass={element.atomicMass}
									name={element.name}
								/>
							</Link>
						</div>
					))
				}
			</div>
		</>
	)
}
