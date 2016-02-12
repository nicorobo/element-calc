// app.js
const React = require('react');
const ReactDOM = require('react-dom');
const Compound = require('mendeleev').Compound;

const Table = require('./components/table.js');

class App extends React.Component {
	constructor() {
		super()
		this.addElement = this.addElement.bind(this);
		this.state = {
			compound: new Compound()
		}
	}

	addElement(element) {
		this.state.compound.add(element);
		console.log(`${element} added to compound...`);
	}

	render() {
		return(
			<Table
				onElementClick={this.addElement} />
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));