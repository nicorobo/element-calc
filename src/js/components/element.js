// element.js

const React = require('react');

class Element extends React.Component {
	render () {
		console.log(this.props.element);
		return (
			<td>
				Element
			</td>
		)
	}
}

module.exports = Element;