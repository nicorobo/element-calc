// space.js

const React = require('react');

class Space extends React.Component {
	render () {
		var extraClass = this.props.collapse ? ' collapse' : '';
		return (
			<td className={"space"+extraClass}>
				<div className="content"></div>
			</td>
		)
	}
}

module.exports = Space;