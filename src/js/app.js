// app.js

const React = require('react');
const ReactDOM = require('react-dom');

const Table = require('./components/table.js');

class App extends React.Component {
	render() {
		return(
			<Table />
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));