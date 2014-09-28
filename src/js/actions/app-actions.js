var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatcher/app-dispatcher.js');

var AppActions = {
	selectType: function (type) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SELECT_TYPE,
			type: type
		});
	},
	editText: function(text){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.EDIT_TEXT,
			text: text
		});
	},
	submitCard: function(){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SUBMIT_CARD,
		});
	}
};

module.exports = AppActions;