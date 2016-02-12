// space.js

const React = require('react');

class Space extends React.Component {
	render () {
		return (
			<td 
				colSpan = {this.props.width || 1} 
				rowSpan = {this.props.height || 1} >
			</td>
		)
	}
}

module.exports = Space;