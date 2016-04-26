// data_bar.js

const React = require('react');
const CompoundDisplay = require('./compound-display.js')

class DataBar extends React.Component {
	render () {
		var mass = this.props.mass < 0.5 ? 0 : this.props.mass;
		return (
			<div className='data-bar' >
				<div className='center'>
					<div className='mass'>{mass.toFixed(4)}</div>
					<CompoundDisplay newCompound={this.props.newCompound} compound={this.props.compound} />
				</div>
				<button className="clear" onClick={this.props.clearCompound}>
					Clear
				</button>
			</div>
		)
	}
}

module.exports = DataBar;