var AppDispatcher = require('../dispatcher/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/app-constants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

//Black card 'b', White card 'w'
var _card = {
	type: 'w',
	text: '',
	slot: 0
};

function _selectType (type) {
	_card.type = type;
}
function _editText(text) {
	_card.text = text;
}
function _getSlots(text){
	var i,
		count = 0,
		state = false;
	if (_card.type === 'b'){
		for (i = 0; i < text.length; i++){
			if (text.charAt(i) === '_') {
				if (!state) {
					count++;
					state = true;
				}
			}
			else {
				state = false;
			}
		}
		count = count || 1;
	}
	_card.slot = count;
}

function _submitCard(){
	// Do something here on submitting card
}

var AppStore = merge(EventEmitter.prototype, {
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	},
	getCard: function(){
		return _card;
	},

	dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
      	case AppConstants.SELECT_TYPE:
        	_selectType(payload.action.type);
        	_editText('');
        	break;

      	case AppConstants.EDIT_TEXT:
        	_editText(payload.action.text);
        	_getSlots(payload.action.text);
        	break;

      	case AppConstants.SUBMIT_CARD:
        	_submitCard();
        	break;
    	}
    AppStore.emitChange();
    return true;
  	})
});

module.exports = AppStore;