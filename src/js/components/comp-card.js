/**
 * @jsx React.DOM
 */

var React = require('react');
var AppStore = require('../store/app-store.js');
var CardText = require('./comp-cardtext.js');
var CardFooter = require('./comp-cardfooter.js');
function setCard() {
	return {card: AppStore.getCard()};
}
var Card = React.createClass({
	getInitialState: function(){
		return setCard();
	},
	componentWillMount: function(){
		AppStore.addChangeListener(this._onChange);
	},
	_onChange: function(){
		this.setState(setCard());
	},
	render: function() {
		var card = this.state.card;
		return (
			<div id="card" className={card.type}>
				<CardText value = {card.text}/>
				<CardFooter slot = {card.slot}/>
			</div>
		);
	}

});

module.exports = Card;