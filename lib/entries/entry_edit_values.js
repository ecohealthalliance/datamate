Template.entryEditValues.helpers({
  /* These helpers determine type for input */
  isText: function() {
    return this.questionType == 'text';
  },
  isTextArea: function() {
    return this.questionType == 'textarea';
  },
  isDrop: function() {
    return this.questionType == 'dropdown';
  },

  questions: function() {
    return Questions.find();
  },
  
  answer: function(questionTitle, entryId) {
    if (Entries.findOne(entryId)) {
    return Entries.findOne(entryId)[questionTitle]
    }
    else {return ""}
  },


  isSelected: function(questionTitle, value, entryId) {
    if (Entries.findOne(entryId)) {
      if (Entries.findOne(entryId)[questionTitle] === value) {
        return "selected";
      }
    }
    return "";
  }
});

