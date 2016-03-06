// data_bar.js

const React = require('react');

class DataBar extends React.Component {
	render () {
		var mass = this.props.mass < 0.5 ? 0 : this.props.mass;
		return (
			<div className='data-bar' >
				<div className='center'>
					<div className='mass'>{mass.toFixed(4)}</div>
					<div className="compound" dangerouslySetInnerHTML={{__html:this.props.compound}}></div>
				</div>
				<button className="clear" onClick={this.props.clearCompound}>
					Clear
				</button>
			</div>
		)
	}
}

module.exports = DataBar;