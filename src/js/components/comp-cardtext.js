/**
 * @jsx React.DOM
 */

var React = require('react');
var AppActions = require('../actions/app-actions.js');
var CardText = React.createClass({
	handleChange: function (event) {
		AppActions.editText(event.target.value);
	},
	render: function() {
		return (
			<textarea value={this.props.text} placeholder="Enter text here" onChange={this.handleChange} maxLength={150} />
		);
	}
});

module.exports = CardText;