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
			<input type="text" value={this.props.text} onChange={this.handleChange}/>
		);
	}
});

module.exports = CardText;