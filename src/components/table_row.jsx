// table_row.js

import React from 'react'
import Space from './space'
import Element from './element'

export default class Row extends React.Component {
  getTableData(data) {
    return data.map((td, i) => {
      if (td.space) {
        return <Space {...td} key={i} />
      } else {
        return (
          <Element
            {...td}
            key={td.element}
            onClick={this.props.onElementClick}
            onRightClick={this.props.onElementRightClick}
            activeElements={this.props.activeElements}
          />
        )
      }
    })
  }

  render() {
    return <tr>{this.getTableData(this.props.data)}</tr>
  }
}
