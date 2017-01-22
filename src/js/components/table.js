// table.js

const React = require('react');
const schema = require('../data/table_schema.js');
const Row = require('./table_row.js');

class Table extends React.Component {
	render() {
		return (
			<table>
				<tbody>
					{ schema.map( (row, i) => {
						return <Row 
							key={i}
							data={row} 
							onElementClick={this.props.onElementClick}
							onElementRightClick={this.props.onElementRightClick}
							activeElements={this.props.activeElements} />
					})}
				</tbody>
			</table>
		)
	}
}

module.exports = Table;
