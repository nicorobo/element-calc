// table_row.js

const React = require('react');

class Row extends React.Component {
	getTableData (data) {
		return data.map( td => {
				return <h1> Hello </h1>
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