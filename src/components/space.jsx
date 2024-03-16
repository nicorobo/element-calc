// space.js
import React from 'react'

export default class Space extends React.Component {
  render() {
    var extraClass = this.props.collapse ? ' collapse' : ''
    return <td className={'space' + extraClass}></td>
  }
}
