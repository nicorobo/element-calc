// compound_display.js

const React = require('react');

class DataBar extends React.Component {
	constructor () {
		super(...arguments)
		this.state = {
			inputMode: false,
			inputValue: ""
		}
	}
	enterInputMode() {
		this.setState({inputMode: true, inputValue: cleanSubTags(this.props.compound)});
		window.addEventListener('mousedown', this.checkForInputClick.bind(this));
		window.addEventListener('touchstart', this.checkForInputClick.bind(this));
	}
	checkForInputClick(e) {
		if(e.target != document.getElementById('compound-input')) {
			this.exitInputMode();
		}
	}
	exitInputMode() {
		this.setState({inputMode: false});
		window.removeEventListener('mousedown', this.checkForInputClick);
		window.removeEventListener('touchstart', this.checkForInputClick);
	}
	handleChange(e) {
		this.setState({inputValue: e.target.value});
		this.props.newCompound(e.target.value);
	}

	render () {
		if (this.state.inputMode){
			return (
				<input type="text" 
					id="compound-input"
					value={this.state.inputValue}
					onChange={this.handleChange.bind(this)} autoFocus/>
			)
		}
		else {
			return (
				<div className="compound" 
					dangerouslySetInnerHTML={{__html:this.props.compound||"<span>No Elements Selected</span>"}}
					onClick={this.enterInputMode.bind(this)}></div>
			)
		}
	}
}

function cleanSubTags(str) {
	var clean = str.replace(/<sub>|<\/sub>/g, "");
	return clean;
}

module.exports = DataBar;