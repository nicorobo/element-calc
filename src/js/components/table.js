// table.js

const React = require('react');
const schema = require('../data/table_schema.js');
const Row = require('./table_row.js');

class Table extends React.Component {
	render() {
		return (
			<table>
				<tbody>
					{ schema.map( row => {
						return <Row 
							data={row} 
							onElementClick={this.props.onElementClick} />
					})}
				</tbody>
			</table>
		)
	}
}

module.exports = Table;
