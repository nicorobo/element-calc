// table_row.js

const React = require('react');
const Space = require('./space.js');
const Element = require('./element.js');

class Row extends React.Component {
	getTableData (data) {
		return data.map( (td, i) => {
			if (td.space) {
				return <Space {...td} key={i} />
			} else {
				return <Element 
					{...td} 
					key={td.element}
					onClick={this.props.onElementClick}
					onRightClick={this.props.onElementRightClick}
					activeElements={this.props.activeElements} />
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