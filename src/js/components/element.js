// element.js

const React = require('react');

class Element extends React.Component {
	render () {
		return (
			<td>
				{this.props.element}
			</td>
		)
	}
}

module.exports = Element;