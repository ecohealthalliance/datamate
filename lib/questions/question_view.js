Template.questionView.helpers({
  currentQuestion: function() {
    return Questions.findOne(this._id);
  },
  dropDown: function () {
  	return this.questionType == 'dropdown'
  }
});