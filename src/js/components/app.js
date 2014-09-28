/** @jsx React.DOM */
var React = require('react');
var Card = require('./comp-card.js');
var SelectType = require('./comp-selecttype.js');
var SubmitCard = require('./comp-submit.js');
var APP =
  React.createClass({
    render:function(){
      return (
      		<div>
	      		<Card/>
	      		<SelectType/>
	      		<SubmitCard/>
      		</div>
      	);
    }
  });
module.exports = APP;