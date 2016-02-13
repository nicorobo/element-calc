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
		return (
			<div className='data-bar' ></div>
		)
	}
}

module.exports = DataBar;