/**
 * @jsx React.DOM
 */

var React = require('react');

var CardFooter = React.createClass({

	render: function() {
		return (
			<div className='card-footer'>
				<div className='card-logo'></div>
				<span>Cards Against Humanity</span>
				<div className='blank-slots'>
					PICK
					<span>this.props.slot</span>
				</div>
			</div>
		);
	}

});

module.exports = CardFooter;