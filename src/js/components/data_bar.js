// data_bar.js

const React = require('react');

class DataBar extends React.Component {
	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
	}
	onClick () {
		this.props.onClick(this.props.element);
	}
	render () {
		var mass = this.props.mass
		return (
			<div className='data-bar' >
				<div className='mass'>{mass.toFixed(4)}</div>
				<div className='blank'></div>
				<div className='compound' dangerouslySetInnerHTML={{__html:this.props.compound}}></div>
			</div>
		)
	}
}

module.exports = DataBar;