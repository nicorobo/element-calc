// app.js
const React = require('react');
const ReactDOM = require('react-dom');
const Compound = require('mendeleev').Compound;

const DataBar = require('./components/data_bar.js')
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
		this.forceUpdate();
	}

	render() {
		return(
			<div>
				<DataBar 
					mass={this.state.compound.mass}
					compound={this.state.compound.toHTML()} />
				<Table
					onElementClick={this.addElement} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));