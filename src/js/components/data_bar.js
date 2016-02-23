// data_bar.js

const React = require('react');
const CompoundDisplay = require('./compound_display.js');

class DataBar extends React.Component {
	render () {
		var mass = this.props.mass
		return (
			<div className='data-bar' >
				<div className='mass'>{mass.toFixed(4)}</div>
				<CompoundDisplay 
					compound={this.props.compound}
					clearCompound={this.props.clearCompound} />
			</div>
		)
	}
}

module.exports = DataBar;