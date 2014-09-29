/**
 * @jsx React.DOM
 */

var React = require('react');
var CardFooter = React.createClass({

	render: function() {
		var slot;
		if (this.props.slot > 1) {
			slot = (<div className='blank-slots'>
						PICK
						<span id="slot-num">{this.props.slot}</span>
					</div>
				);
		}
		return (
			<div className='card-footer'>
				<div className='card-logo'></div>
				<span className='footer-text'>Cards Against Humanity</span>
				{slot}
			</div>
		);
	}

});

module.exports = CardFooter;