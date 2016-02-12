// app.js
const React = require('react');
const ReactDOM = require('react-dom');
const Compound = require('mendeleev').Compound;

const Table = require('./components/table.js');

class App extends React.Component {
	constructor() {
		super()
		this.addElement = this.addElement.bind(this);
	}

	getInitialState() {
		var compound = new Compound();
		return {
			compound: compound
		}
	}

	addElement(element) {
		this.state.compound.add(element);
		console.log('Element Added...');
	}

	render() {
		return(
			<Table
				onElementClick={this.addElement} />
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));