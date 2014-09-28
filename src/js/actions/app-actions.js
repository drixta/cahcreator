var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatcher/app-dispatcher.js');

var AppActions = {
	selectType: function (type) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SELECT_TYPE,
			type: type
		});
	},
	editText: function(){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.EDIT_TEXT
		});
	},
	submitCard: function(card){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SUBMIT_CARD,
			card: card
		});
	}
};

module.exports = AppActions;