/**
 * @jsx React.DOM
 */

var React = require('react');
var AppActions = require('../actions/app-actions.js');
var SubmitCard = React.createClass({
	handleClick: function (event) {
		AppActions.submitCard();
	},
	render: function() {
		return (
			<button onClick={this.handleClick}>Submit Card</button>
		);
	}

});

module.exports = SubmitCard;