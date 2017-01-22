// data_bar.js

const React = require('react');
const CompoundDisplay = require('./compound-display.js')

class DataBar extends React.Component {
	render () {
		var percentages = this.props.percentages;
		var mass = this.props.mass < 0.5 ? 0 : this.props.mass;
		return (
			<div className='data-bar' >
				<div className='center'>
					<div className='mass'>{mass.toFixed(4)}</div>
					<CompoundDisplay newCompound={this.props.newCompound} compound={this.props.compound} />
					<div className='percentages'>{percentages.map(p => <span key={p.element} className='percentage-group'><span className="percentage-element">{p.element} </span><span className="percentage-value">{(p.percentage*100).toFixed(2)}%</span></span>)}</div>
				</div>
				<button className="clear" onClick={this.props.clearCompound}>
					Clear
				</button>
			</div>
		)
	}
}

module.exports = DataBar;