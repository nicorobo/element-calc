// compound_display.js

const React = require('react');

class Display extends React.Component {
	render () {
		return (
			<div className="compound-display">
				<span className="compound" dangerouslySetInnerHTML={{__html:this.props.compound}}></span>
				<button className="clear" onClick={this.props.clearCompound}>Clear</button>
			</div>
		)
	}
}

module.exports = Display;