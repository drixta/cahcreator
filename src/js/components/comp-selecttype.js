/**
 * @jsx React.DOM
 */

var React = require('react');
var AppActions = require('../actions/app-actions.js');
var SelectType = React.createClass({
	handleClick: function (e) {
		AppActions.selectType(e.target.value);
	},
	render: function() {
		return (
			<section id="select-type">
				<label>
					<input onclick={this.handleClick} type="radio" name="card" checked value="w"/>
					White
				</label>
				<label>
					<input onclick={this.handleClick} type="radio" name="card" value="b"/>
					Black
				</label>
			</section>
		);
	}
});

module.exports = SelectType;