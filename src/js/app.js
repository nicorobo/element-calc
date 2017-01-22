// app.js
const React = require('react');
const ReactDOM = require('react-dom');
const Compound = require('mendeleev').Compound;
const Utility = require('mendeleev').Utility;

const DataBar = require('./components/data_bar.js')
const Table = require('./components/table.js');

const attachFastClick = require('fastclick');
attachFastClick(document.body);


class App extends React.Component {
	constructor() {
		super();
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

	newCompound(str) {
		var eList = Utility.stringToElementList(str);
		if(eList) {
			this.setState({compound: new Compound(eList)});
		}
	}

	clearCompound() {
		this.state.compound.clear();
		this.forceUpdate();
	}

	render() {
		return(
			<div>
				<DataBar 
					mass={this.state.compound.getMass()}
					percentages={this.state.compound.getPercentages()}
					compound={this.state.compound.toHTML()}
					clearCompound={this.clearCompound.bind(this)} 
					newCompound={this.newCompound.bind(this)}/>
				<Table
					onElementClick={this.addElement.bind(this)} 
					onElementRightClick={this.removeElement.bind(this)}
					activeElements={this.state.compound.elementsList}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));