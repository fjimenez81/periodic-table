

export default function Legend() {
  return (
	<div className="legend">
				<div className="legend__item">
					<div className="legend__box noble-gases"></div>
					<div className="legend__name">Gases Nobles</div>
				</div>
				<div className="legend__item">
					<div className="legend__box transition-metals"></div>
					<div className="legend__name">Metales de Transición</div>
				</div>
				<div className="legend__item">
					<div className="legend__box halogens"></div>
					<div className="legend__name">Halógenos</div>
				</div>
				<div className="legend__item">
					<div className="legend__box alkaline-earth"></div>
					<div className="legend__name">Alcalinotérreos</div>
				</div>
				<div className="legend__item">
					<div className="legend__box no-metals"></div>
					<div className="legend__name">No Metales</div>
				</div>
				<div className="legend__item">
					<div className="legend__box alkali-metals"></div>
					<div className="legend__name">Metales Alcalinos</div>
				</div>
				<div className="legend__item">
					<div className="legend__box metalloids"></div>
					<div className="legend__name">Metaloides</div>
				</div>
				<div className="legend__item">
					<div className="legend__box lanthanides"></div>
					<div className="legend__name">Lantánidos</div>
				</div>
				<div className="legend__item">
					<div className="legend__box other-metals"></div>
					<div className="legend__name">Otros Metales</div>
				</div>
				<div className="legend__item">
					<div className="legend__box actinides"></div>
					<div className="legend__name">Actínidos</div>
				</div>
			</div>
  )
}
