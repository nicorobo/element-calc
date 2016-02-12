// table_row.js

const React = require('react');
const Space = require('./space.js');
const Element = require('./element.js');

class Row extends React.Component {
	getTableData (data) {
		return data.map( td => {
			if (td.space) {
				return <Space {...td} />
			} else {
				return <Element {...td} onClick= {this.props.onElementClick} />
			}
		})
	}

	render () {
		return (
			<tr>
				{ this.getTableData(this.props.data) }
			</tr>
		)
	}
}

module.exports = Row;