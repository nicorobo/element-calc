// element.js

const React = require('react');

class Element extends React.Component {
	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
	}
	onClick () {
		this.props.onClick(this.props.element);
	}
	render () {
		console.log(this.props);
		return (
			<td onClick = {this.onClick}>
				{this.props.element}
			</td>
		)
	}
}

module.exports = Element;