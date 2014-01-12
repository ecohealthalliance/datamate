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
    return Datamate._options.keyField
  },
  keyFieldValue: function () {
    var keyField = Datamate._options.keyField;
    return this[keyField];
  },
  titleFieldName: function () {
    return Datamate._options.titleField;
  },
  titleFieldValue: function () {
    var titleField = Datamate._options.titleField;
    return this[titleField];
  },
  subTitleFieldName: function () {
    return Datamate._options.subTitleField;
  },
  subTitleFieldValue: function () {
    var subTitleField = Datamate._options.subTitleField;
    return this[subTitleField];
  }
});

Template.entriesListItem.events({
  'click .upvoteable': function(event) {
    event.preventDefault();
    Meteor.call('upvote', this._id);
  }
});