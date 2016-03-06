// element.js

const React = require('react');
const PeriodicTable = require('mendeleev').PeriodicTable;

class Element extends React.Component {
	constructor () {
		super();
		this.onTouchStart = this.onTouchStart.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.state = { addNew: true, timeout: null, active: false }
	}
	onTouchStart (e) {
		// e.stopPropagation();
		// e.preventDefault();
		var timer = window.setTimeout(() => {
			this.props.onRightClick(this.props.element);
			var interval = window.setInterval(() => {
				this.props.onRightClick(this.props.element);
			}, 300) 
			this.setState({interval, addNew: false})
		}, 500 )
		this.setState({timeout: timer, active: true});
	}
	onTouchEnd (e) {
		e.stopPropagation();
		e.preventDefault();
		window.clearTimeout(this.state.timeout)
		window.clearInterval(this.state.interval);
		if (this.state.addNew && this.state.active) {
			this.props.onClick(this.props.element);
		}
		this.setState({addNew: true, active: false })
	}
	onMouseLeave () {
		window.clearTimeout(this.state.timeout);
		window.clearInterval(this.state.interval);
		this.setState({addNew: true, active: false });
	}
	render () {
		var data = PeriodicTable.getElement(this.props.element);
		var extraClass = this.props.activeElements.length > 0 && this.props.activeElements.indexOf(this.props.element) < 0 
			? 'grayscale '
			: '';
		return (
			<td 
				className = {extraClass+'element type-'+data.type}
				onMouseDown = {this.onTouchStart}
				onMouseUp = {this.onTouchEnd}
				onTouchStart = {this.onTouchStart}
				onTouchEnd = {this.onTouchEnd}
				onMouseLeave = {this.onMouseLeave}
				onTouchMove = {this.onMouseLeave}>
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