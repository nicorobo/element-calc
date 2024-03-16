// app.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Compound, Utility } from 'mendeleev'

import DataBar from './components/data_bar'
import Table from './components/table'
import fastClick from 'fastclick'
fastClick(document.body)

import './css/main.scss'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      compound: new Compound(),
    }
  }

  addElement(element) {
    this.state.compound.add(element)
    this.forceUpdate()
  }

  removeElement(element) {
    this.state.compound.remove(element)
    this.forceUpdate()
  }

  newCompound(str) {
    var eList = Utility.stringToElementList(str)
    if (eList) {
      this.setState({ compound: new Compound(eList) })
    }
  }

  clearCompound() {
    this.state.compound.clear()
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <DataBar
          mass={this.state.compound.getMass()}
          percentages={this.state.compound.getPercentages()}
          compound={this.state.compound.toHTML()}
          clearCompound={this.clearCompound.bind(this)}
          newCompound={this.newCompound.bind(this)}
        />
        <Table
          onElementClick={this.addElement.bind(this)}
          onElementRightClick={this.removeElement.bind(this)}
          activeElements={this.state.compound.elementsList}
        />
      </div>
    )
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
