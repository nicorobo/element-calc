// table.js
import React from 'react'
import schema from '../data/table_schema'
import Row from './table_row'

export default class Table extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {schema.map((row, i) => {
            return (
              <Row
                key={i}
                data={row}
                onElementClick={this.props.onElementClick}
                onElementRightClick={this.props.onElementRightClick}
                activeElements={this.props.activeElements}
              />
            )
          })}
        </tbody>
      </table>
    )
  }
}
