// element.js

const React = require('react');
const PeriodicTable = require('mendeleev').PeriodicTable;

class Element extends React.Component {
	constructor () {
		super();
		this.onClick = this.onClick.bind(this);
		this.onRightClick = this.onRightClick.bind(this);
		this.onTouchStart = this.onTouchStart.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);
		this.state = { addNew: true, timeout: null }
	}
	onClick () {
		this.props.onClick(this.props.element);
	}
	onRightClick (e) {
		e.preventDefault();
		this.props.onRightClick(this.props.element);
	}
	onTouchStart () {
		var timer = window.setTimeout(() => {
			this.props.onRightClick(this.props.element);
			this.setState({addNew: false})
		}, 500 )
		this.setState({timeout: timer});
	}
	onTouchEnd () {
		window.clearTimeout(this.state.timeout)
		if (this.state.addNew) {
			this.props.onClick(this.props.element);
			this.setState({addNew: false })
		}
	}
	render () {
		var data = PeriodicTable.getElement(this.props.element);
		var extraClass = this.props.activeElements.length > 0 && this.props.activeElements.indexOf(this.props.element) < 0 
			? 'grayscale '
			: '';
		return (
			<td 
				className = {extraClass+'element type-'+data.type}
				onClick = {this.onClick}
				onTouchStart = {this.onTouchStart}
				onTouchEnd = {this.onTouchEnd}
				onContextMenu = {this.onRightClick}>
				<div className = 'content'>
					<div className="number">{data.number}</div>
					<div className="symbol">{data.symbol}</div>
					<div className="mass">{Math.round(data.mass*100)/100}</div>
				</div>
			</td>
		)
	}
}

module.exports = Element;