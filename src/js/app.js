// app.js
const React = require('react');
const ReactDOM = require('react-dom');
const Compound = require('mendeleev').Compound;

const DataBar = require('./components/data_bar.js')
const Table = require('./components/table.js');

const attachFastClick = require('fastclick');
attachFastClick(document.body);


class App extends React.Component {
	constructor() {
		super()
		this.addElement = this.addElement.bind(this);
		this.removeElement = this.removeElement.bind(this);
		this.clearCompound = this.clearCompound.bind(this);
		this.state = {
			compound: new Compound()
		}
	}

	addElement(element) {
		this.state.compound.add(element);
		this.forceUpdate();
	}

	removeElement(element) {
		this.state.compound.remove(element);
		this.forceUpdate();
	}

	clearCompound() {
		this.state.compound.clear();
		this.forceUpdate();
	}

	render() {
		return(
			<div>
				<DataBar 
					mass={this.state.compound.mass}
					compound={this.state.compound.toHTML()}
					clearCompound={this.clearCompound} />
				<Table
					onElementClick={this.addElement} 
					onElementRightClick={this.removeElement}
					activeElements={this.state.compound.elementsList}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));