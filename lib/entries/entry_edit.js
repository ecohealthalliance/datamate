Template.entryEdit.helpers({
  entry: function() {
    return Entries.findOne(this._id);
  },
  questions: function() {
    return Questions.find();
  },
  answer: function(questionTitle) {
    return Entries.findOne(this._id)[questionTitle]
  }
});

Template.entryEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentEntryId = this._id;

    var entryProperties = {}

    /*TODO: this is broken */

    $(".controls *").each(function(index,element){
      var name=$(element).attr('name')
      var value=$(element).val()
      entryProperties[name]=value
    })

    Entries.update(currentEntryId, {$set: entryProperties}, function(error) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
      } else {
        Router.go('entryPage', {_id: currentEntryId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this entry?")) {
      var currentEntryId = this._id;
      Entries.remove(currentEntryId);
      Router.go('entriesList');
    }
  }
});