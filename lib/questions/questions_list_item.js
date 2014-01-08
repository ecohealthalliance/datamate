Template.questionsListItem.helpers({
  ownQuestion: function() {
    return this.userId == Meteor.userId();
  }
});

Template.questionsListItem.events({
  'click .upvoteable': function(event) {
    event.preventDefault();
    Meteor.call('upvote', this._id);
  }
});