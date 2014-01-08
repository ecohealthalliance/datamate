Template.entriesListItem.helpers({
  ownEntry: function() {
    return this.userId == Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  keyFieldName: function () {
    return Datamate._options.keyField;
  },
  keyFieldValue: function () {
    var keyField = Datamate._options.keyField;
    return this[keyField];
  }
});

Template.entriesListItem.events({
  'click .upvoteable': function(event) {
    event.preventDefault();
    Meteor.call('upvote', this._id);
  }
});