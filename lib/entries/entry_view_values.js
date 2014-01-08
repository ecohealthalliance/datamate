Template.entryViewValues.helpers({
  answer: function(questionTitle, entryId) {
    if (Entries.findOne(entryId)) {
    return Entries.findOne(entryId)[questionTitle]
    }
    else {return ""}
  },
  questions: function() {
    return Questions.find();
  }
});